import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximeComponent } from './maxime.component';

describe('MaximeComponent', () => {
  let component: MaximeComponent;
  let fixture: ComponentFixture<MaximeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaximeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
