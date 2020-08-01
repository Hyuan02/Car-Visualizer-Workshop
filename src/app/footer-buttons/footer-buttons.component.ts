import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-buttons',
  templateUrl: './footer-buttons.component.html',
  styleUrls: ['./footer-buttons.component.sass']
})
export class FooterButtonsComponent implements OnInit {


  public colors:string[] = ["#000000", "#FFFFFF", "#00ff00", "#ff0000", "#0000ff", "#ffff00", "#00ffff"];
  constructor() { }

  ngOnInit() {
  }

}
