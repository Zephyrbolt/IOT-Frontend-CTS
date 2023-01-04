import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-aqms',
  templateUrl: './aqms.component.html',
  styleUrls: ['./aqms.component.css']
})
export class AQMSComponent implements OnInit {
  name = ''
  data = [
    {FloorNumber : 1 , O2 : 50 ,  Co2: 21 , So2: 1},
    {FloorNumber : 2 , O2 : 51 ,  Co2: 17 , So2: 0.9},
    {FloorNumber : 3 , O2 : 51 ,  Co2: 24 , So2: 1.2},
    {FloorNumber : 4 , O2 : 55 ,  Co2: 13 , So2: 1.1}
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.name = this.route.snapshot.params['name']
  }

}
