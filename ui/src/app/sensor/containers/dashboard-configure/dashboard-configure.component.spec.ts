import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConfigureComponent } from './dashboard-configure.component';

describe('DashboardConfigureComponent', () => {
  let component: DashboardConfigureComponent;
  let fixture: ComponentFixture<DashboardConfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
