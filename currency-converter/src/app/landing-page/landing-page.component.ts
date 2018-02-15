import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = AppComponent.title
}
