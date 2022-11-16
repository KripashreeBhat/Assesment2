import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  weatherTemp: any;
  temp: any;
  conv: any;
  name: any;
  store: any;
  weatherIcon: any;
  favs: any;
  favdata: any;
  unfavs: any;
  favrts: any;
  dispcel=true;
  dispfar=true;
  clickfav = true;
  unclick = false;
  isValue: number = 0;
  remem:any;
 far:any;
  constructor(private http: HttpClient, private route: Router) {
    this.loadData();
  }

  ngOnInit(): void {
    localStorage.getItem('name');
    
    this.name = localStorage.getItem('name');
    this.name = JSON.parse(this.name);
    // console.log(this.name);
    this.favrts = localStorage.getItem('favs');
    this.favrts = JSON.parse(this.favrts);
   
    for (let fav of this.favrts) {
      if (fav.data.name.toLowerCase() === (this.name).toLowerCase()) {
        this.clickfav = false;
        this.unclick = true;
      }
    }
  }
  loadData() {
    this.name = localStorage.getItem('name');
    this.name = JSON.parse(this.name);
    // console.log(this.name);
    // this.conv= localStorage.getItem('remembertemp');
    if (this.name === null) {
      this.name = 'udupi';
    }
    this.http
      .get(`${API_URL}/weather?q=${this.name}&appid=${API_KEY}`)
      .subscribe((data) => {
        this.temp = data;

        // this.remem = localStorage.getItem('remembertemp');
        // window.location.reload();
        // this.conv = this.temp['main'].temp;
        this.remem = localStorage.getItem('remembertemp');
        if(this.remem == 1){
          this.isValue=1;
          this.conv = (this.temp['main'].temp - 273.15).toFixed(0);
        }
        else
        {
          this.isValue=2;
          this.conv = (1.8 * (this.temp['main'].temp - 273.15) + 32).toFixed(0);
        }
        this.weatherIcon = `http://openweathermap.org/img/wn/${this.temp['weather'][0].icon}@2x.png`;
        this.favdata = localStorage.getItem('favs');
        this.favdata = JSON.parse(this.favdata);
      });

    // ,err=>alert('OOPs!! Something went wrong, Please try again'
  }
  click() {
    this.clickfav = !this.clickfav;
    this.unclick = !this.unclick;
    if (this.unclick == true) {
      if (localStorage.getItem('favs')) {
        this.favs = localStorage.getItem('favs');
        this.favs = JSON.parse(this.favs);
        
        let data = this.temp;
        this.favs.push({data})
        
        localStorage.setItem('favs', JSON.stringify(this.favs));
      } else {
        let data = this.temp;
      
        this.favs = [{data}];
      }
      localStorage.setItem('favs', JSON.stringify(this.favs));
    } else {
      this.favs = localStorage.getItem('favs');
      this.favs = JSON.parse(this.favs);
      let curfav = this.favs.find((currfav: any) => {
        return currfav.data.name === this.temp['name'];
      });
      this.favs.splice(curfav.index, 1);
      localStorage.setItem('favs', JSON.stringify(this.favs));
    }
  }

  color() {
    // return this.clickfav === false;
  }

  celconv() {
    this.isValue = 1;
    this.conv = (this.temp['main'].temp - 273.15).toFixed(0);
  }
  farconv() {
    this.isValue = 2;
    this.conv = (1.8 * (this.temp['main'].temp - 273.15) + 32).toFixed(0);
  }

  remembertemp(){
    this.remem =localStorage.setItem('remembertemp', JSON.stringify(this.isValue));
    
    // this.remem = JSON.parse(this.remem)
  }
}
