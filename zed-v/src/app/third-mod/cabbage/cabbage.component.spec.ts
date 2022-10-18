import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabbageComponent } from './cabbage.component';

describe('CabbageComponent', () => {
  let component: CabbageComponent;
  let fixture: ComponentFixture<CabbageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabbageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabbageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
