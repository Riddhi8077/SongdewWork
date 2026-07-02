import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayout } from './components/page-layout/page-layout';
import { OpportunityCard } from './components/opportunity-card/opportunity-card';

@Component({
  selector: 'app-opportunity-list',
  standalone: true,
  imports: [
    CommonModule,
    PageLayout,
    OpportunityCard
  ],
  templateUrl: './opportunity-list.html',
  styleUrl: './opportunity-list.css'
})
export class OpportunityList {

  opportunities = [

  {
    type: 'PLAYLIST',
    title: 'Get Playlisted On "Travel Songs Indie (Hindi)" (2.1K+ Saves)',
    daysLeft: '4 days left',
    applyDate: 'Apply by Jul 5, 2026',
    image: 'https://via.placeholder.com/70'
  },

  {
    type: 'RADIO PLAY',
    title: 'Get Interviewed On Friends FM',
    daysLeft: '18 days left',
    applyDate: 'Apply by Jul 19, 2026',
    image: 'https://via.placeholder.com/70'
  },

  {
    type: 'PUBLICATION',
    title: 'Feature Your Song In Music Blog',
    daysLeft: '32 days left',
    applyDate: 'Apply by Aug 2, 2026',
    image: 'https://via.placeholder.com/70'
  },

  {
    type: 'LIVE GIG',
    title: 'Perform Live At Music Festival',
    daysLeft: '10 days left',
    applyDate: 'Apply by Jul 11, 2026',
    image: 'https://via.placeholder.com/70'
  },

  {
    type: 'CONTEST',
    title: 'National Indie Singing Contest',
    daysLeft: '22 days left',
    applyDate: 'Apply by Jul 24, 2026',
    image: 'https://via.placeholder.com/70'
  },

  {
    type: 'CONTENT',
    title: 'Create Instagram Reel For Artist',
    daysLeft: '15 days left',
    applyDate: 'Apply by Jul 16, 2026',
    image: 'https://via.placeholder.com/70'
  }

];

}