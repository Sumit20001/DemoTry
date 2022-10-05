import { Component, OnInit } from '@angular/core';

@Component({
//  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = "sumit";
  j = "mandal";

  constructor() { }

  ngOnInit(): void {
  }

}
