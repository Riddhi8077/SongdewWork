import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { DataEntry } from './components/data-entry/data-entry';
import { OpportunityList } from './components/opportunity-list/opportunity-list';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
  path: 'employee',
  component: DataEntry,
  canActivate: [authGuard]
  },

  {
  path: 'opportunities',
  component: OpportunityList
  },

  {
    path: '**',
    redirectTo: ''
  }

];