import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'lil-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contact = null;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getContacts().subscribe((contact: any) => {
      this.contact = contact;
    });
  }

}
