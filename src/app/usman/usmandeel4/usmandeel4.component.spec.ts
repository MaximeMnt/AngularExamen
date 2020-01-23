import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usmandeel4Component } from './usmandeel4.component';

describe('Usmandeel4Component', () => {
  let component: Usmandeel4Component;
  let fixture: ComponentFixture<Usmandeel4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usmandeel4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usmandeel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
