import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  templateUrl: './contact-form.component.html',
  imports: [CommonModule, FormsModule]
})
export class ContactFormComponent {
  contact = { id: 0, name: '', email: '', phone: '' };

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}

  saveContact(): void {
    this.contact.id = Date.now();
    this.contactService.addContact(this.contact);
    this.router.navigate(['/contacts']);
  }
}
