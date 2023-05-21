import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsiderPresentationComponent } from './outsider-presentation.component';

describe('OutsiderPresentationComponent', () => {
  let component: OutsiderPresentationComponent;
  let fixture: ComponentFixture<OutsiderPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutsiderPresentationComponent]
    });
    fixture = TestBed.createComponent(OutsiderPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
