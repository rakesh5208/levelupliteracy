import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'lil-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
  students:Student[] =[];
  marqueeNotifications:any = [];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getStudentTestinomials().subscribe((students)=>{
      this.students = students;
    });
    this.dataService.getNotifications().subscribe((notifications)=>{
      this.marqueeNotifications = notifications
    });
  }

}
