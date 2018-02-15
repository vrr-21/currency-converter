import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRatesComponentComponent } from './current-rates-component.component';

describe('CurrentRatesComponentComponent', () => {
  let component: CurrentRatesComponentComponent;
  let fixture: ComponentFixture<CurrentRatesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentRatesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRatesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
