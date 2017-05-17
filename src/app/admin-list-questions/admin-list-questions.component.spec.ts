import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListQuestionsComponent } from './admin-list-questions.component';

describe('AdminListQuestionsComponent', () => {
  let component: AdminListQuestionsComponent;
  let fixture: ComponentFixture<AdminListQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
