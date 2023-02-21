import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

  @Input() textD:string="";

  n1:number = 0;
  n2:number = 0;

  res:number = 0;
  

  sub(){
    this.res = this.n1+this.n2;
  }
}