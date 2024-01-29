import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListereunionComponent } from './listereunion.component';

describe('ListereunionComponent', () => {
  let component: ListereunionComponent;
  let fixture: ComponentFixture<ListereunionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListereunionComponent]
    });
    fixture = TestBed.createComponent(ListereunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
