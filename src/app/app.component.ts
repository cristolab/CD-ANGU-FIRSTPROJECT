import { createPlatform } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello FirstProject';
  version = 1.2;
  isActivated = false;

  LesBriques = [
    {
      bname:"Brique Lego",
      bstatus:"Off"
    },
    {
      bname:"Brique Duplo",
      bstatus:"On"
    },
    {
      bname:"Brique Mamagoo",
      bstatus:"Off"
    },
    {
      bname:"Brique Playmo",
      bstatus:"On"
    }
  ];

  constructor() {
    setTimeout(()=> {
      this.isActivated = true;
    }, 
    2000)   
  }
  
  onActivateAll() {
    console.log("On active tout !");
  }
}
