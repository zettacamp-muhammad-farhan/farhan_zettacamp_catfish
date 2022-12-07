import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySuccessComponent } from './history-success.component';

describe('HistorySuccessComponent', () => {
  let component: HistorySuccessComponent;
  let fixture: ComponentFixture<HistorySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorySuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
