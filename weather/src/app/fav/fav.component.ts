import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DialogremoveComponent } from '../dialogremove/dialogremove.component';
const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
})
export class FavComponent implements OnInit {
  fav = false;
  likedlist: any;
  replacenav: boolean = false;
  found = true;
  table = false;
  filled = true;
  notfilled = false;
  len: any;
  name: any;
  addedToFav: boolean = false;

  constructor(
    private route: Router,
    private dialog: MatDialog,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.likedlist = localStorage.getItem('favs');
    this.likedlist = JSON.parse(this.likedlist);
    this.len = this.likedlist.length;
    if (this.likedlist != null) {
      this.found = false;
      this.table = true;
    } else {
      this.table = false;
      this.found = true;
    }
  }
  opendialog() {
    this.dialog.open(DialogremoveComponent, {
      panelClass: 'my-class',
    });
  }
  filed() {
    this.filled = false;
    this.notfilled = true;
    localStorage.getItem('favs');
  }
  // notfiled(i:any){
  //   this.filled = true;
  //   this.notfilled = false;
  // }
  remove(data: any) {
    let remove = this.likedlist.filter(
      (like: any) => like['name'] != data['name']
    );
    localStorage.setItem('favs', JSON.stringify(remove));
    this.route.navigateByUrl('/fav').then(() => window.location.reload());
  }
}
