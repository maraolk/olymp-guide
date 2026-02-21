import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympiadCard } from './olympiad-card';

describe('OlympiadCard', () => {
  let component: OlympiadCard;
  let fixture: ComponentFixture<OlympiadCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlympiadCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlympiadCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
