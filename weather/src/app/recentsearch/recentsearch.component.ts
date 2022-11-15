import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recentsearch',
  templateUrl: './recentsearch.component.html',
  styleUrls: ['./recentsearch.component.css'],
})
export class RecentsearchComponent implements OnInit {
  found = false;
  table = true;
  replacenav: boolean = false;
  recent: any;
  unfav = true;
  filled =false;
  notfilled =true;
  favrts: any;
  info: any;
  name: any;
  favcolor = false;
  favs:any;
  value:any;
  curfav :any;
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.recent = localStorage.getItem('temp');
    this.recent = JSON.parse(this.recent);

    if (this.recent === null) {
      this.found = true;
      this.table = false;
    } else {
      this.found = false;
      this.table = true;
    }
  }
  displayinfo(info:any) {
    console.log(info);
    localStorage.setItem('name', JSON.stringify(info));
    this.name = localStorage.getItem('name');
    console.log(this.name);
    
    this.route.navigate(['/home']);
  }

  clearAll() {
    localStorage.removeItem('temp');
    this.found = true;
    this.table = false;
    window.location.reload();
  }

  addedfav(data: any) {
    this.favrts = localStorage.getItem('favs');
    this.favrts = JSON.parse(this.favrts);
    //  console.log(data);
    if (this.favrts) {
      for (let fav of this.favrts) {
        // console.log(data);
        // console.log(fav['name']);

        if (data == fav['name']) {
          this.filled = true;
          this.notfilled = false;
          break;
        } else {
          this.filled = false;
          this.notfilled = true;
        }
      }
    }
  }

   addremovefav(dat:any){
    console.log(dat);
    console.log(dat.data.name);
    this.favs = localStorage.getItem('favs');
    // this.filled =!this.filled;
    // this.notfilled =!this.notfilled;
    this.favs = localStorage.getItem('favs');
      this.favs = JSON.parse(this.favs);
       this.curfav = this.favs.find((currfav: any) => {
        console.log(currfav['name']);
        console.log(dat.data.name);
        
        
       this.value =(currfav['name'] === dat.data.name);
      })
      console.log(this.value);
      
    if (this.value === false) {
      console.log('joke');
      
       
        this.favs = localStorage.getItem('favs');
        // let notfav = this.temp;
        this.favs = JSON.parse(this.favs);
        // this.favs = [dat, ...this.favs];
        this.favs = JSON.parse(this.favs) || [];
        this.favs.push({dat});
        // console.log(this.favs);
        // for(let fav of this.favs){

          console.log(this.favs.data.name);
        // }
        
        localStorage.setItem('favs', JSON.stringify(this.favs));
       
      localStorage.setItem('favs', JSON.stringify(this.favs));
    } else {
      this.favs = localStorage.getItem('favs');
      this.favs = JSON.parse(this.favs);
      let curfav = this.favs.find((currfav: any) => {
        return currfav['name'] === dat.data.name;
        
        
      });
      this.favs.splice(curfav.index, 1);
      localStorage.setItem('favs', JSON.stringify(this.favs));
    }
  }
   
  addtofav() {
    // this.filled = true;
    // this.notfilled = false;
  }
  removefromfav() {
    // this.filled = false;
    // this.notfilled = true;
  }
}
