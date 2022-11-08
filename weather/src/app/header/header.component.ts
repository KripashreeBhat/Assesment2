import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public date= new Date();
  today:number =Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
