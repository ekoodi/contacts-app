import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactListComponent} from './contact/contact-list/contact-list.component';
import { ContactListItemComponent} from './contact/contact-list-item/contact-list-item.component';
import {ContactService} from "./contact/services/contact.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "@angular/material";



@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
