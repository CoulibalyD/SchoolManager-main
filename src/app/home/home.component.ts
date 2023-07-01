import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {
  constructor(private toastr: ToastrService) {}
  showSuccess() {
    this.toastr.success('Hello world!'); 
  }

}
