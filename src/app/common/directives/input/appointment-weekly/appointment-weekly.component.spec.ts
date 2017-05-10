import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentWeeklyComponent } from './appointment-weekly.component';

describe('AppointmentWeeklyComponent', () => {
  let component: AppointmentWeeklyComponent;
  let fixture: ComponentFixture<AppointmentWeeklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentWeeklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
