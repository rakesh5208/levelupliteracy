import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'lil-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses:Course[] = [];
  isLoading = false;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataService.getCourses().subscribe((courses:Course[])=>{
      this.courses = courses;
      this.isLoading = false;
    },(error)=>{
      this.isLoading = false;
    })
  }

}
