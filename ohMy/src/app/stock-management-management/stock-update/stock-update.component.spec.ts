import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockUpdateComponent } from './stock-update.component';

describe('StockUpdateComponent', () => {
  let component: StockUpdateComponent;
  let fixture: ComponentFixture<StockUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
