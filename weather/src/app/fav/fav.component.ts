import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { JsonpClientBackend } from '@angular/common/http';
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
  table = true;
  filled = true;
  notfilled = false;
  len:any;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.likedlist = localStorage.getItem('favs');
    this.likedlist = JSON.parse(this.likedlist);
    this.len = this.likedlist.length;
    if(this.likedlist === null){
      this.found = true;
      this.table = false;
    }
    else{
      this.table = true;
      this.found = false;
    }
  }
opendialog(){
  this.dialog.open(DialogremoveComponent,{
    panelClass: 'my-class'
  });


}
filed(){
  this.filled = false;
  this.notfilled = true;
}
notfiled(){
  this.filled = true;
  this.notfilled = false;
}

}
