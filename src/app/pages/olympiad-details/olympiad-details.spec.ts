import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympiadDetails } from './olympiad-details';

describe('OlympiadDetails', () => {
  let component: OlympiadDetails;
  let fixture: ComponentFixture<OlympiadDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlympiadDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlympiadDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
