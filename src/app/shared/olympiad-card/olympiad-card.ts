import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { LevelLabelPipe } from '../level-label-pipe';
import { HoverCardDirective } from '../hover-card';
import { Olympiad } from '../../data/olympiads';

@Component({
  selector: 'app-olympiad-card',
  standalone: true,
  imports: [RouterLink, NgClass, LevelLabelPipe, HoverCardDirective],
  templateUrl: './olympiad-card.html',
  styleUrl: './olympiad-card.css',
})
export class OlympiadCard {
  olympiad = input.required<Olympiad>();
  openDetails = output<number>();
}