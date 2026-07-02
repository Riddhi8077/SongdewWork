import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sort.html',
  styleUrl: './sort.css'
})
export class Sort {

  isOpen = false;

  selectedOption = 'Featured';

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {

    this.selectedOption = option;

    this.isOpen = false;

  }

}