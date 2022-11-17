import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StcokManagementMainComponent } from './stcok-management-main.component';

describe('StcokManagementMainComponent', () => {
  let component: StcokManagementMainComponent;
  let fixture: ComponentFixture<StcokManagementMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StcokManagementMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StcokManagementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
