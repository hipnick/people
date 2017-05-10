import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionComponentComponent } from './subscription-component.component';

describe('SubscriptionComponentComponent', () => {
  let component: SubscriptionComponentComponent;
  let fixture: ComponentFixture<SubscriptionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
