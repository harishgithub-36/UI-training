import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter';
  Title='Counter';
  // displayval='';
  // getData(value:any)
  // {
  //   this.displayval=value;
  //   // console.log(value)
  // }
  count=0
  counter(type:any)
  {
    type==='add' ?this.count++:this.count--;
  }
}
