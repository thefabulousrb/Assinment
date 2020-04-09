import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeaddLeaveComponent } from './employeeadd-leave.component';

describe('EmployeeaddLeaveComponent', () => {
  let component: EmployeeaddLeaveComponent;
  let fixture: ComponentFixture<EmployeeaddLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeaddLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeaddLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
