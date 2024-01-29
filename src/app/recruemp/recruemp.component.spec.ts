import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruempComponent } from './recruemp.component';

describe('RecruempComponent', () => {
  let component: RecruempComponent;
  let fixture: ComponentFixture<RecruempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruempComponent]
    });
    fixture = TestBed.createComponent(RecruempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
