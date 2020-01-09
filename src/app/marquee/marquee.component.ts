import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lil-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent implements OnInit {
  @Input()notfications = [];
  constructor() { }

  ngOnInit() {
  }

}
