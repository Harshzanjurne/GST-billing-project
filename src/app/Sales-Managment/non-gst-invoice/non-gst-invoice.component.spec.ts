import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonGSTInvoiceComponent } from './non-gst-invoice.component';

describe('NonGSTInvoiceComponent', () => {
  let component: NonGSTInvoiceComponent;
  let fixture: ComponentFixture<NonGSTInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonGSTInvoiceComponent]
    });
    fixture = TestBed.createComponent(NonGSTInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
