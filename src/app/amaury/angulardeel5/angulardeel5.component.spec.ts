import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angulardeel5Component } from './angulardeel5.component';

describe('Angulardeel5Component', () => {
  let component: Angulardeel5Component;
  let fixture: ComponentFixture<Angulardeel5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angulardeel5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angulardeel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
