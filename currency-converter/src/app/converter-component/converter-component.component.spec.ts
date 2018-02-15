import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterComponentComponent } from './converter-component.component';

describe('ConverterComponentComponent', () => {
  let component: ConverterComponentComponent;
  let fixture: ComponentFixture<ConverterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
