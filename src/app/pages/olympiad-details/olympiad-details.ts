import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OLYMPIADS, Olympiad } from '../../data/olympiads';

@Component({
  selector: 'app-olympiad-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './olympiad-details.html',
  styleUrl: './olympiad-details.css',
})
export class OlympiadDetails {
  olympiad: Olympiad | undefined;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.olympiad = OLYMPIADS.find(o => o.id === id);
  }
}
