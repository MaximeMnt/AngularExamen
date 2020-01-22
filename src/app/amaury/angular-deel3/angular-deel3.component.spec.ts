import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDeel3Component } from './angular-deel3.component';

describe('AngularDeel3Component', () => {
  let component: AngularDeel3Component;
  let fixture: ComponentFixture<AngularDeel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDeel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDeel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
