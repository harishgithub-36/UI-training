import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData:any={};
  constructor() { }

  ngOnInit(): void {
  }

  getData(data:any){
    console.log(data)
    this.userData=data
  }

}
