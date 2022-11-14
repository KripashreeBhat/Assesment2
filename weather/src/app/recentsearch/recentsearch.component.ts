import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recentsearch',
  templateUrl: './recentsearch.component.html',
  styleUrls: ['./recentsearch.component.css']
})
export class RecentsearchComponent implements OnInit {
  found = false;
  table =true;
  replacenav:boolean=false;
  recent:any;
  unfav=true;
  filled = false;
  notfilled = true;
  favrts:any;
  constructor() { }

  ngOnInit(): void {
    this.recent = localStorage.getItem('temp');
    this.recent = JSON.parse(this.recent);

    if(this.recent === null){
      this.found = true;
      this.table = false;
    }

    else{
      this.found =false;
      this.table = true;
    }
  }
 
clearAll(){
  localStorage.removeItem('temp');
  this.found=true;
  this.table=false;
  window.location.reload();
}

filed(){
  // this.filled = false;
  // this.notfilled = true;
}
notfiled(){
  // this.filled = true;
  // this.notfilled = false;
}

displayinfo(){

}
addedfav(data:any){
 this.favrts = localStorage.getItem('favs');
 this.favrts = JSON.parse(this.favrts);
 console.log(data);
 if(this.favrts){
 for( let fav of this.favrts){
  console.log(data);
  console.log(fav['name']);
  
  if(data == fav['name']){
    this.filled = true;
    this.notfilled = false;
    break;
  }
  else{
    this.filled = false;
    this.notfilled = true;
  }
 }
}
}
}
