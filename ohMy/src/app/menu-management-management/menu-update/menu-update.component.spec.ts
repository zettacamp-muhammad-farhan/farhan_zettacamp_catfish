import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUpdateComponent } from './menu-update.component';

describe('MenuUpdateComponent', () => {
  let component: MenuUpdateComponent;
  let fixture: ComponentFixture<MenuUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
