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
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
opendialog(){
  this.dialog.open(DialogremoveComponent,{
    panelClass: 'my-class'

  });
}
}
