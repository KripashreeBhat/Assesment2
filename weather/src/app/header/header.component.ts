import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public date= new Date();
  today:number =Date.now();
  
  searchForm!:FormGroup;
  constructor(private fb: FormBuilder) { }
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
}
search(){
  this.hidesearchtab=false;
  localStorage.setItem('name',JSON.stringify(this.searchForm.get('name')?.value));
  window.location.reload();


}
}
