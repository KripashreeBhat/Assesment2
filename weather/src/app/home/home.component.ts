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
  weatherIcon:any;
  dispbtn:boolean=false;
  constructor(private http:HttpClient) {
    this.loadData();
   }
   clickfav = true;
   
   ngOnInit(): void {
    localStorage.getItem('name')
    this.dispbtn = true;
  }
  loadData(){
    this.name = localStorage.getItem('name');
    this.name = JSON.parse(this.name);
    this.http.get(`${API_URL}/weather?q=${this.name}&appid=${API_KEY}`).subscribe(data=>{
      console.log(data);
      this.temp = data;
      this.conv = this.temp['main'].temp; 
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.temp['weather'][0].icon}@2x.png`
      // this.weatherTemp = (this.temp['main'].temp)
      // console.log(this.weatherTemp);
      
      
  })
  // ,err=>alert('OOPs!! Something went wrong, Please try again'
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
