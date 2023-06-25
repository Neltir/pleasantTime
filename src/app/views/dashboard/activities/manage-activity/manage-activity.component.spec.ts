import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageActivityComponent } from './manage-activity.component';

describe('ManageActivityComponent', () => {
  let component: ManageActivityComponent;
  let fixture: ComponentFixture<ManageActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageActivityComponent]
    });
    fixture = TestBed.createComponent(ManageActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
