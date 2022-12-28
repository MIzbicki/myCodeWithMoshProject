import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTitleCaseComponent } from './my-title-case.component';

describe('MyTitleCaseComponent', () => {
  let component: MyTitleCaseComponent;
  let fixture: ComponentFixture<MyTitleCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTitleCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTitleCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
