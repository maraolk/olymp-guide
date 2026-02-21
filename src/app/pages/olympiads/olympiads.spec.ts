import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Olympiads } from './olympiads';

describe('Olympiads', () => {
  let component: Olympiads;
  let fixture: ComponentFixture<Olympiads>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Olympiads]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Olympiads);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
