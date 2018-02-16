import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter-component',
  templateUrl: './converter-component.component.html',
  styleUrls: ['./converter-component.component.css']
})
export class ConverterComponentComponent implements OnInit {
  s_c_curr: string
  s_c_value: number
  d_c_curr: string
  d_c_value: number
  constructor()
  {
    this.s_c_value=0
    this.d_c_value=this.s_c_value;
  }

  convertValue(): void
  {
    this.d_c_value=this.s_c_value*61;
  }

  ngOnInit() {
  }
}
