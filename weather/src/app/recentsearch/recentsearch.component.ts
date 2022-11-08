import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recentsearch',
  templateUrl: './recentsearch.component.html',
  styleUrls: ['./recentsearch.component.css']
})
export class RecentsearchComponent implements OnInit {
  fav = true;
  constructor() { }

  ngOnInit(): void {
  }

}
