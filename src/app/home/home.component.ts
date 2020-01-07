import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lil-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
