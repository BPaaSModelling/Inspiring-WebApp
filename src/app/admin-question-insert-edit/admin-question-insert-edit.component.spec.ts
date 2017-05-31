import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuestionInsertEditComponent } from './admin-question-insert-edit.component';

describe('AdminQuestionInsertEditComponent', () => {
  let component: AdminQuestionInsertEditComponent;
  let fixture: ComponentFixture<AdminQuestionInsertEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuestionInsertEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuestionInsertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
