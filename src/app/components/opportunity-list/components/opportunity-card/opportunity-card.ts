import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opportunity-card',
  standalone: true,
  imports: [],
  templateUrl: './opportunity-card.html',
  styleUrl: './opportunity-card.css'
})
export class OpportunityCard {

  @Input() opportunity: any;

  openOpportunity() {
    console.log(this.opportunity);
  }

}