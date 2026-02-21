import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OLYMPIADS, Olympiad } from '../../data/olympiads';
import { LevelLabelPipe } from '../../shared/level-label-pipe';
import { NgClass } from '@angular/common';
import { HoverCardDirective } from '../../shared/hover-card';
import { FormsModule } from '@angular/forms';
import { OlympiadCard } from '../../shared/olympiad-card/olympiad-card';

@Component({
  selector: 'app-olympiads',
  standalone: true,
  imports: [FormsModule, OlympiadCard],
  templateUrl: './olympiads.html',
  styleUrl: './olympiads.css',
})
export class Olympiads {
  olympiads: Olympiad[] = OLYMPIADS;
  searchText = '';
  levelFilter: 'all' | '1' | '2' | '3' | 'state' = 'all';

  get filteredOlympiads() {
    return this.olympiads.filter(o => {
      const byName = o.name.toLowerCase().includes(this.searchText.toLowerCase());

      const byLevel =
        this.levelFilter === 'all' ||
        (this.levelFilter === 'state' && o.level === null) ||
        (this.levelFilter === '1' && o.level === 1) ||
        (this.levelFilter === '2' && o.level === 2) ||
        (this.levelFilter === '3' && o.level === 3);

      return byName && byLevel;
    });
  }

  onOpenDetails(id: number) {
    console.log('Открыли олимпиаду с id:', id);
  }
}