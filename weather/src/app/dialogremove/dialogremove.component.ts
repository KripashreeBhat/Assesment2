import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dialogremove',
  templateUrl: './dialogremove.component.html',
  styleUrls: ['./dialogremove.component.css']
})
export class DialogremoveComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
 clearall(){
  localStorage.removeItem('favs');
  this.route.navigateByUrl('fav');
   window.location.reload();
 }
}
