import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsertQuestionComponent } from './admin-insert-question.component';

describe('AdminInsertQuestionComponent', () => {
  let component: AdminInsertQuestionComponent;
  let fixture: ComponentFixture<AdminInsertQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInsertQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInsertQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
