import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from './services/contact.service';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  contatos: Contact[] = [];
  showForm = false;
  newContact: Contact = { id: 0, name: '', email: '', phone: '' };

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contatos = this.contactService.getContacts();
  }

  onSubmit() {
    if (this.newContact.name && this.newContact.email && this.newContact.phone) {
      const newId = this.contatos.length > 0 ? this.contatos[this.contatos.length - 1].id + 1 : 1;
      this.newContact.id = newId;

      this.contactService.addContact(this.newContact);
      this.contatos = this.contactService.getContacts();

      this.newContact = { id: 0, name: '', email: '', phone: '' };
      this.showForm = false;
    }
  }

  removeContact(contactId: number) {
    this.contactService.removeContact(contactId);
    this.contatos = this.contactService.getContacts();
  }
}
