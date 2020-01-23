import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Maximedeel5Component } from './maximedeel5.component';

describe('Maximedeel5Component', () => {
  let component: Maximedeel5Component;
  let fixture: ComponentFixture<Maximedeel5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Maximedeel5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Maximedeel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
