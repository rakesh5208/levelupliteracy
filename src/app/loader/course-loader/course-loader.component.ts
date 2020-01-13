import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lil-course-loader',
  templateUrl: './course-loader.component.html',
  styleUrls: ['./course-loader.component.scss']
})
export class CourseLoaderComponent implements OnInit, OnChanges {
  
  @Input() count = 0;
  loaderCount = new Array(this.count);
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let countChange = changes['count'];
    this.loaderCount = new Array(this.count).fill(1);
  }

}
