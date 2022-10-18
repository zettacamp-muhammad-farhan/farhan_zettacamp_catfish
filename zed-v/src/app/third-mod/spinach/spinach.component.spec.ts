import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinachComponent } from './spinach.component';

describe('SpinachComponent', () => {
  let component: SpinachComponent;
  let fixture: ComponentFixture<SpinachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
