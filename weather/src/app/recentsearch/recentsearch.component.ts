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
  filled = false;
  notfilled = true;
  favrts: any;
  info: any;
  name: any;
  favcolor = false;
  favs: any;
  value: any;
  curfav: any;
  temp: any;
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
  displayinfo(info: any) {
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
        if (data == fav.data.name) {
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

  addtofav(add: any) {
    this.favs = localStorage.getItem('favs');
    this.favs = JSON.parse(this.favs) || [];
    this.favs.push(add)

    localStorage.setItem('favs', JSON.stringify(this.favs));

  }
  removefromfav(remove: any) {
    this.favrts = localStorage.getItem('favs');
    this.favrts = JSON.parse(this.favrts);
    let remo = this.favrts.filter((like: any) => like.data.name != remove.data.name );
    localStorage.setItem('favs', JSON.stringify(remo));
  }
}
