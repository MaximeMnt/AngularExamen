import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angularoef2Component } from './angularoef2.component';

describe('Angularoef2Component', () => {
  let component: Angularoef2Component;
  let fixture: ComponentFixture<Angularoef2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angularoef2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angularoef2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
