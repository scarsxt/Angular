import { Component } from '@angular/core';
import { SlistService } from '../slist.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  constructor(public items:SlistService){

  }

  list:any[]=[];

  item:string = "";
  item2:string = "Dummy";

  submit(){
    this.items.setData(this.item);
    this.list.push(this.item);
  }

  deleteP(x:string){
    var i = this.list.indexOf(x);
    this.list.splice(i, 1);
  }

}
