import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css'
})
export class Tabs {

  activeTab = 'open';

  changeTab(tab: string) {
    this.activeTab = tab;
  }

}