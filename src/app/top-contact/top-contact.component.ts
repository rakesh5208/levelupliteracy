import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'lil-top-contact',
  templateUrl: './top-contact.component.html',
  styleUrls: ['./top-contact.component.scss']
})
export class TopContactComponent implements OnInit {
  primaryEmail = '';
  primaryPhone = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getContacts().subscribe((contact: any) => {
      this.primaryEmail = contact.emails[0];
      this.primaryPhone = contact.phones[0];
    })
  }

}
