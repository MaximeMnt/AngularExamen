import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmauryComponent } from './amaury.component';

describe('AmauryComponent', () => {
  let component: AmauryComponent;
  let fixture: ComponentFixture<AmauryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmauryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmauryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
