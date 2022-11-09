import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 name:any;
 temp:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.name = JSON.parse(this.name);
    this.http.get(`${API_URL}/weather?q=${this.name}&appid=${API_KEY}`).subscribe(data=>{
      this.temp = data;
  })

}
}