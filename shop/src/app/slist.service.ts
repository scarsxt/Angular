import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlistService {

  list:{x:string}[];
  constructor() { 
    this.list=[

    ]
  }

  name:string = "";

  setData(item:string){
    this.name = item;
  }

  getData(){
    return this.name;
  }
}
