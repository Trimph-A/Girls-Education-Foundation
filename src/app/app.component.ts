import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



// Import the standalone Header and Footer components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // Import standalone components here
})
export class AppComponent {
  title = 'girls-education-foundation';
}
