import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotMainComponent } from './forgot-main.component';

describe('ForgotMainComponent', () => {
  let component: ForgotMainComponent;
  let fixture: ComponentFixture<ForgotMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
