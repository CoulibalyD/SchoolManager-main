import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  currentDate : string

  constructor(){
    const currentYear = new Date().getFullYear();
    this.currentDate = currentYear.toString();
  }
}
