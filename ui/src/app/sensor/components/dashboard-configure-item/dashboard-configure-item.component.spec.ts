import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConfigureItemComponent } from './dashboard-configure-item.component';

describe('DashboardConfigureItemComponent', () => {
  let component: DashboardConfigureItemComponent;
  let fixture: ComponentFixture<DashboardConfigureItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConfigureItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConfigureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
