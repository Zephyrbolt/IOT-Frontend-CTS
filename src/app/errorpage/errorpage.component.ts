import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {
  errormessage = 'Oops! Something happened. Please Contact customer support'
  constructor() { }

  ngOnInit(): void {
  }

}
