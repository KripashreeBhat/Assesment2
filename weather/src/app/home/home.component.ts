import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
  store:any;
  weatherIcon:any;
  dispbtn:boolean=false;
  favs:any;
  unfavs:any;
  filteredList!: any[];
  clickfav = true;
   unclick = false;
  constructor(private http:HttpClient, private route: Router) {
    this.loadData();
   }
   
   
   ngOnInit(): void {
    localStorage.getItem('name')
    this.dispbtn = true;
    // this.route.navigate(['/home']).then(()=>window.location.reload())
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
      // this.route.navigate(['/home']).then
      // window.location.reload();
      // window.location.reload()
  })
  // ,err=>alert('OOPs!! Something went wrong, Please try again'
}
click(){
  this.clickfav = false;
  this.unclick = true;
  let fav = this.name;
  this.http.get(`${API_URL}/weather?q=${fav}&appid=${API_KEY}`).subscribe(data=>{
   console.log(data);
   this.favs = localStorage.getItem('favs');
   this.favs = JSON.parse(this.favs) || [];
   this.favs.push({data});
   localStorage.setItem('favs',JSON.stringify(this.favs));
  
 
  })
}
clickfavr(){
 this.clickfav = true;
 this.unclick = false;
 this.unfavs = localStorage.getItem('favs');
 this.unfavs = JSON.parse(this.unfavs) || [];

 
}


celconv(){
  this.conv = (this.temp['main'].temp-273.15).toFixed(2);
}
farconv(){
  this.conv = this.temp['main'].temp;
}


 
}
