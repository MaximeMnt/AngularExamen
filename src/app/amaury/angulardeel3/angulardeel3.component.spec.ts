import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angulardeel3Component } from './angulardeel3.component';

describe('Angulardeel3Component', () => {
  let component: Angulardeel3Component;
  let fixture: ComponentFixture<Angulardeel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angulardeel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angulardeel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
