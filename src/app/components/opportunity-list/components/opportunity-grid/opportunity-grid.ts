import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityCard } from '../opportunity-card/opportunity-card';

@Component({
  selector: 'app-opportunity-grid',
  standalone: true,
  imports: [
    CommonModule,
    OpportunityCard
  ],
  templateUrl: './opportunity-grid.html',
  styleUrl: './opportunity-grid.css'
})
export class OpportunityGrid {

  @Input() opportunities: any[] = [];

}