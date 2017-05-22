import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsertProviderComponent } from './admin-insert-provider.component';

describe('AdminInsertProviderComponent', () => {
  let component: AdminInsertProviderComponent;
  let fixture: ComponentFixture<AdminInsertProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInsertProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInsertProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
