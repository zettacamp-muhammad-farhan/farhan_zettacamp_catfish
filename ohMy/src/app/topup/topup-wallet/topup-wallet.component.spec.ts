import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupWalletComponent } from './topup-wallet.component';

describe('TopupWalletComponent', () => {
  let component: TopupWalletComponent;
  let fixture: ComponentFixture<TopupWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopupWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopupWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
