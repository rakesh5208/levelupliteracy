import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'lil-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contact = null;
  isLoading = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataService.getContacts().subscribe((contact: any) => {
      this.isLoading = false;
      this.contact = contact;
    },(err)=>{
      this.isLoading = false;
    });
  }

}
