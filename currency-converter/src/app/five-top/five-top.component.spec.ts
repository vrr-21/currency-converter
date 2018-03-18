import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveTopComponent } from './five-top.component';

describe('FiveTopComponent', () => {
  let component: FiveTopComponent;
  let fixture: ComponentFixture<FiveTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
