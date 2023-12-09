import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDeliveryChallanComponent } from './add-new-delivery-challan.component';

describe('AddNewDeliveryChallanComponent', () => {
  let component: AddNewDeliveryChallanComponent;
  let fixture: ComponentFixture<AddNewDeliveryChallanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewDeliveryChallanComponent]
    });
    fixture = TestBed.createComponent(AddNewDeliveryChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
