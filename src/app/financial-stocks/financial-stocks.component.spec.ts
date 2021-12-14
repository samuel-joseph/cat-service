import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStocksComponent } from './financial-stocks.component';

describe('FinancialStocksComponent', () => {
  let component: FinancialStocksComponent;
  let fixture: ComponentFixture<FinancialStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
