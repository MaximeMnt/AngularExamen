import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angulardeelsub5Component } from './angulardeelsub5.component';

describe('Angulardeelsub5Component', () => {
  let component: Angulardeelsub5Component;
  let fixture: ComponentFixture<Angulardeelsub5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angulardeelsub5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angulardeelsub5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
