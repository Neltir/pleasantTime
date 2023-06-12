import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseActivityComponent } from './browse-activity.component';

describe('BrowseActivityComponent', () => {
  let component: BrowseActivityComponent;
  let fixture: ComponentFixture<BrowseActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseActivityComponent]
    });
    fixture = TestBed.createComponent(BrowseActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
