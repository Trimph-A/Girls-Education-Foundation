import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  modalOpen: boolean = false;
  modalTitle: string = '';
  modalContent: string = '';

  openModal(section: string) {
    this.modalOpen = true;
    if (section === 'learnMore') {
      this.modalTitle = 'Learn More';
      this.modalContent = 'We strongly believe that quality education fosters upward socioeconomic mobility and is key to escaping poverty...';
    } else if (section === 'vision') {
      this.modalTitle = 'Vision';
      this.modalContent = 'Our vision is to empower underserved girls through education and mentorship...';
    } else if (section === 'commitments') {
      this.modalTitle = 'Core Commitments';
      this.modalContent = 'We are committed to providing the resources and opportunities necessary to build a brighter future for girls...';
    }
  }

  closeModal() {
    this.modalOpen = false;
    this.modalTitle = '';
    this.modalContent = '';
  }
}