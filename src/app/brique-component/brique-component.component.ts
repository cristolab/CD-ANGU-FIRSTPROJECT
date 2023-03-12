import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brique-component',
  templateUrl: './brique-component.component.html',
  styleUrls: ['./brique-component.component.scss']
})

////////////////////////////////////////////
// Class BriqueComponent.component
////////////////////////////////////////////
export class BriqueComponentComponent {

  @Input() bricName: string = "myBricName";
  @Input() status: string = "On";

  // **** CTOR ****
  constructor() {

  }

  // **** OnInit Angular (Une fois les liaison initialisées) ****
  ngOnInit() {

  }

  // **** GetStatus ****
  getStatus() {
    return this.status;    
  }

  // **** GetName ****
  getBricName() {
    return this.bricName;
  }


}
