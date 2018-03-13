import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyWikiComponent } from './currency-wiki.component';

describe('CurrencyWikiComponent', () => {
  let component: CurrencyWikiComponent;
  let fixture: ComponentFixture<CurrencyWikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyWikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
