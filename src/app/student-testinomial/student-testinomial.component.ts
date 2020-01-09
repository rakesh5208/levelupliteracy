import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lil-student-testinomial',
  templateUrl: './student-testinomial.component.html',
  styleUrls: ['./student-testinomial.component.scss']
})
export class StudentTestinomialComponent implements OnInit {
  @Input() student:Student;
  constructor() { }

  ngOnInit() {
  }

}
