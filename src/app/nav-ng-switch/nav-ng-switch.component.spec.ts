import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNgSwitchComponent } from './nav-ng-switch.component';

describe('NavNgSwitchComponent', () => {
  let component: NavNgSwitchComponent;
  let fixture: ComponentFixture<NavNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavNgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
