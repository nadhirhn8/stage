import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormreunionComponent } from './formreunion.component';

describe('FormreunionComponent', () => {
  let component: FormreunionComponent;
  let fixture: ComponentFixture<FormreunionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormreunionComponent]
    });
    fixture = TestBed.createComponent(FormreunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
