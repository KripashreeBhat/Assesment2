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
}
