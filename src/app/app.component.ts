import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  isDisabled = true;


  arr:{name:string, age:number}[] = [
    {
      name:'Vasya',
      age:23
    },
    {
      name:'Petya',
      age:35
    }
  ];

  changeTitle(event: string){
    console.log(event);
    this.title = event;
    if(this.title.length > 0){
      this.isDisabled = false;
    }else {
      this.isDisabled = true;
    }

  }

  addItem(item:string) {
    this.arr.push({name:item,age:25});
  }
}
