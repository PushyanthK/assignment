import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssgnComponent } from './assgn.component';

describe('AssgnComponent', () => {
  let component: AssgnComponent;
  let fixture: ComponentFixture<AssgnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssgnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
