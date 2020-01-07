import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lil-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year = 0;
  constructor() { 
    this.year = new Date().getFullYear()
  }

  ngOnInit() {
  }

}
