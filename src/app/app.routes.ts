import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Olympiads } from './pages/olympiads/olympiads';
import { OlympiadDetails } from './pages/olympiad-details/olympiad-details';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'olympiads', component: Olympiads },
  { path: 'olympiads/:id', component: OlympiadDetails },
  { path: 'about', component: About },
  { path: '**', component: NotFound },
];