import { Component, Input } from '@angular/core';
import { Banner } from '../banner/banner';
import { Heading } from '../heading/heading';
import { Tabs } from '../tabs/tabs';
import { Sort } from '../sort/sort';
import { Categories } from '../categories/categories';
import { OpportunityGrid } from '../opportunity-grid/opportunity-grid';
import { Search } from '../search/search';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [
    Banner,
    Heading,
    Tabs,
    Sort,
    Categories,
    OpportunityGrid,
    Search,
    Footer
  ],
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.css'
})
export class PageLayout {

  opportunities = [

    {
      image: 'opportunities/bts.jpeg',
      type: 'BTS',
      title: 'BTS: Master Vocal Production With Abril Molina From Ear Candy Technologies',
      daysLeft: '1 day left',
      applyDate: 'Apply by Jul 3, 2026'
    },

    {
      image: 'opportunities/Playlisted.jpg',
      type: 'Playlist',
      title: 'Get Playlisted On "Travel Songs Indie (Hindi)" (2.1K+ Saves On Spotify)',
      daysLeft: '3 days left',
      applyDate: 'Apply by Jul 5, 2026'
    },

    {
      image: 'opportunities/getinterviewed.jpg',
      type: 'Radio Play',
      title: 'Get Interviewed on 91.9 Friends FM By RJ Smriti (Average Weekly Listenership of 301K+)',
      daysLeft: '17 days left',
      applyDate: 'Apply by July 19, 2026'
    },

    {
      image: 'opportunities/playlist.png',
      type: 'PLAYLIST',
      title: 'Top Hindi Playlist Promotion',
      daysLeft: '7 days left',
      applyDate: 'Apply by Jul 9, 2026'
    },

    {
      image: 'opportunities/live-gig.png',
      type: 'LIVE GIG',
      title: 'Live Performance Opportunity',
      daysLeft: '12 days left',
      applyDate: 'Apply by Jul 12, 2026'
    },

    {
      image: 'assets/opportunities/content.png',
      type: 'CONTENT',
      title: 'Music Video Promotion',
      daysLeft: '25 days left',
      applyDate: 'Apply by Jul 28, 2026'
    }

  ];

  filteredOpportunities = this.opportunities;

  filterByCategory(category: string) {

  if (category === 'All') {
    this.filteredOpportunities = this.opportunities;
    return;
  }

  this.filteredOpportunities = this.opportunities.filter(
    opportunity => opportunity.type.toLowerCase() === category.toLowerCase()
  );

}

}