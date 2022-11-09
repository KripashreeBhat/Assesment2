import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weatherTemp : any;
  temp:any;
  conv :any;
  name:any;
  constructor(private http:HttpClient) {
    this.loadData();
   }
   clickfav = true;
   
   ngOnInit(): void {
    
  }
  loadData(){
    this.name = localStorage.getItem('name');
    this.name = JSON.parse(this.name);
    this.http.get(`${API_URL}/weather?q=${this.name}&appid=${API_KEY}`).subscribe(data=>{
      console.log(data);
      this.temp = data;
      this.conv = this.temp['main'].temp;
      // this.weatherTemp = (this.temp['main'].temp)
      // console.log(this.weatherTemp);
      
      
  })
}
clickfavr(){
 this.clickfav =! this.clickfav;

}
celconv(){
  this.conv = (this.temp['main'].temp-273.15).toFixed(2);
}
farconv(){
  this.conv = this.temp['main'].temp;
}


 
}
