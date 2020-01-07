import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lil-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  isCollapsed = true;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateTo(path){
    this.router.navigateByUrl(path);
    this.isCollapsed = true;
  }

}
