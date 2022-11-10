import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogremoveComponent } from '../dialogremove/dialogremove.component';
@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  fav = false;
  likedlist:any;
  replacenav:boolean=false;
  found = false;
  table =true;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.likedlist = localStorage.getItem('favs');
    this.likedlist = JSON.parse(this.likedlist);
   
  }
opendialog(){
  this.dialog.open(DialogremoveComponent,{
    panelClass: 'my-class'
  });

}
}
