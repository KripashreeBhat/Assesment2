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
  dispbtn: boolean = false;
  favs: any;
  favdata: any;
  unfavs: any;
  favrts: any;
  // filteredList!: any[];
  clickfav = true;
  unclick = false;
  constructor(private http: HttpClient, private route: Router) {
    this.loadData();
  }

  ngOnInit(): void {
    localStorage.getItem('name');
    this.dispbtn = true;

    // this.route.navigate(['/home']).then(()=>window.location.reload())
    this.name = localStorage.getItem('name');
    this.name = JSON.parse(this.name);
    // console.log(this.name);
    this.favrts = localStorage.getItem('favs');
    this.favrts = JSON.parse(this.favrts);
    for (let fav of this.favrts) {
      // console.log(this.favrts);
      // console.log(fav.name.toLowerCase());

      if (fav['name'].toLowerCase() === (this.name).toLowerCase()) {
        this.clickfav = false;
        this.unclick = true;
      }
    }
  }
  loadData() {
    this.name = localStorage.getItem('name');
    this.name = JSON.parse(this.name);
    // console.log(this.name);

    if (this.name === null) {
      this.name = 'udupi';
    }
    this.http
      .get(`${API_URL}/weather?q=${this.name}&appid=${API_KEY}`)
      .subscribe((data) => {
        // console.log(data);
        this.temp = data;
        this.conv = this.temp['main'].temp;
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
        // let notfav = this.temp;
        this.favs = JSON.parse(this.favs);
        this.favs = [this.temp, ...this.favs];
        // console.log(this.favs);
        localStorage.setItem('favs', JSON.stringify(this.favs));
      } else {
        this.favs = [this.temp];
      }
      localStorage.setItem('favs', JSON.stringify(this.favs));
    } else {
      this.favs = localStorage.getItem('favs');
      this.favs = JSON.parse(this.favs);
      let curfav = this.favs.find((currfav: any) => {
        return currfav['name'] === this.temp['name'];
      });
      this.favs.splice(curfav.index, 1);
      localStorage.setItem('favs', JSON.stringify(this.favs));
    }
  }

  color() {
    return this.clickfav === false;
  }

  celconv() {
    this.conv = (this.temp['main'].temp - 273.15).toFixed(0);
  }
  farconv() {
    this.conv = (1.8 * (this.temp['main'].temp - 273.15) + 32).toFixed(0);
  }
}
