import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private contacts: Contact[] = [];

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  removeContact(contactId: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== contactId);
  }


  getContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }
}
