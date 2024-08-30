import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsSoldComponent } from './units-sold.component';

describe('UnitsSoldComponent', () => {
  let component: UnitsSoldComponent;
  let fixture: ComponentFixture<UnitsSoldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UnitsSoldComponent]
    });
    fixture = TestBed.createComponent(UnitsSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
