import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgForComponent } from './my-ng-for.component';

describe('MyNgForComponent', () => {
  let component: MyNgForComponent;
  let fixture: ComponentFixture<MyNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
