import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionHistoryComponent } from './submission-history.component';

describe('SubmissionHistoryComponent', () => {
  let component: SubmissionHistoryComponent;
  let fixture: ComponentFixture<SubmissionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmissionHistoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
