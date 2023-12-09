import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonGSTPaymentEditionComponent } from './non-gst-payment-edition.component';

describe('NonGSTPaymentEditionComponent', () => {
  let component: NonGSTPaymentEditionComponent;
  let fixture: ComponentFixture<NonGSTPaymentEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonGSTPaymentEditionComponent]
    });
    fixture = TestBed.createComponent(NonGSTPaymentEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
