import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormemployeeComponent } from './formemployee.component';

describe('FormemployeeComponent', () => {
  let component: FormemployeeComponent;
  let fixture: ComponentFixture<FormemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormemployeeComponent]
    });
    fixture = TestBed.createComponent(FormemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
