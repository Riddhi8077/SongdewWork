import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})

export class Categories {

  @Output() categorySelected = new EventEmitter<string>();

  selectedCategory = 'All';

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }

}