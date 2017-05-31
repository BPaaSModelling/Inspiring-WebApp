import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListProvidersComponent } from './admin-list-providers.component';

describe('AdminListProvidersComponent', () => {
  let component: AdminListProvidersComponent;
  let fixture: ComponentFixture<AdminListProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
