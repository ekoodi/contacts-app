import { Component } from '@angular/core';
import {Contact} from 'app/contact/contact';
import { ContactService} from './contact/services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  contacts: Contact[];


  constructor() {
    this.contacts = [
      new Contact(123, 'Jouni', 'Könönen','040 123456', 'Skinnarlankatu 1','LAPPEENRANTA'),
      new Contact(127, 'Pekka', 'Könönen','040 123459', 'Skinnarlankatu 2','LAPPEENRANTA'),
      new Contact(129, 'Matti', 'Möttönen','040 123451', 'Vesijärjenkatu 6','LAHTI'),
    ];
  }
}


