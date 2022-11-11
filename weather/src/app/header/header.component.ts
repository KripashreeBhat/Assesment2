import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public date= new Date();
  dispsearch=false;
  hamburger=true;
  today:number =Date.now();
  normheader:boolean=false;
  replacenav:boolean=false;
  mobilemedia:any = window.matchMedia('(max-width:500px)')
  searchForm!:FormGroup;
  temp:any;
  constructor(private fb: FormBuilder, private http:HttpClient,private route: Router) { 
    if(this.mobilemedia.matches){
      // this.replacenav = true;
      // this.normheader = false;

    }
    else{
      // this.normheader = true;
      // this.replacenav = true;
    }
  }
  hidetab:boolean= false;
  hidesearchtab:boolean= false;
  ngOnInit(): void {
    this.searchForm =this.fb.group({
      'name':['']
    })
    
  }
  
openTab(){
  this.hidetab =true;
}
closeTab(){
  this.hidetab=false;
}
closesearch(){
  this.hidesearchtab= false;
}
opensearch(){

  this.hidesearchtab=true;
  this.hamburger=false;
}
search(){
  // localStorage.setItem('name',JSON.stringify(this.searchForm.get('name')?.value));
  // this.hidesearchtab = false;
 
  let name = this.searchForm.get('name')?.value;
  localStorage.setItem('name',JSON.stringify(this.searchForm.get('name')?.value));
  this.http.get(`${API_URL}/weather?q=${name}&appid=${API_KEY}`).subscribe(data=>{
    console.log(data);
    
  this.temp=localStorage.getItem('temp');
  this.temp = JSON.parse(this.temp) || [];
  this.temp.push({data});
  console.log(this.temp);
  localStorage.setItem('temp', JSON.stringify(this.temp));
   this.route.navigate(['/home']).then(()=>window.location.reload())
   


})
// this.route.navigate(['home']);
}
navigate(){
  this.route.navigateByUrl('/home').then(() => window.location.reload());
}
}
