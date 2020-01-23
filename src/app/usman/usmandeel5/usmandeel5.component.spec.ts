import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usmandeel5Component } from './usmandeel5.component';

describe('Usmandeel5Component', () => {
  let component: Usmandeel5Component;
  let fixture: ComponentFixture<Usmandeel5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usmandeel5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usmandeel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
