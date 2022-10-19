import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor() { }

  flightName=""
  origin=""
  designation=""
  capacity=""

  status:boolean=false

  readValues=()=>{
    let data={
      "flightName":this.flightName,
      "origin":this.origin,
      "designation":this.designation,
      "capacity":this.capacity
    }
    console.log(data)

    this.status=true
  }

  ngOnInit(): void {
  }

}
