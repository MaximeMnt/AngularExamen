import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angulardeel4Component } from './angulardeel4.component';

describe('Angulardeel4Component', () => {
  let component: Angulardeel4Component;
  let fixture: ComponentFixture<Angulardeel4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angulardeel4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angulardeel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
