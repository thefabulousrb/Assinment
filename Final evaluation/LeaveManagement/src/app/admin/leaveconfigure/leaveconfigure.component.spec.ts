import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveconfigureComponent } from './leaveconfigure.component';

describe('LeaveconfigureComponent', () => {
  let component: LeaveconfigureComponent;
  let fixture: ComponentFixture<LeaveconfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveconfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveconfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
