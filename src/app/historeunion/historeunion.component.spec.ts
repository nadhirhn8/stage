import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoreunionComponent } from './historeunion.component';

describe('HistoreunionComponent', () => {
  let component: HistoreunionComponent;
  let fixture: ComponentFixture<HistoreunionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoreunionComponent]
    });
    fixture = TestBed.createComponent(HistoreunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
