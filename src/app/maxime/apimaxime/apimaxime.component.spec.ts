import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIMaximeComponent } from './apimaxime.component';

describe('APIMaximeComponent', () => {
  let component: APIMaximeComponent;
  let fixture: ComponentFixture<APIMaximeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIMaximeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIMaximeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
