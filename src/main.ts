import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms'; // Importando FormsModule

bootstrapApplication(AppComponent, {
  providers: [
    FormsModule // Adicionando FormsModule aos provedores
  ]
}).catch(err => console.error(err));
