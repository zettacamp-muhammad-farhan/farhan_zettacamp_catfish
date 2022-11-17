import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuManagementMainComponent } from './menu-management-main.component';

describe('MenuManagementMainComponent', () => {
  let component: MenuManagementMainComponent;
  let fixture: ComponentFixture<MenuManagementMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuManagementMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuManagementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
