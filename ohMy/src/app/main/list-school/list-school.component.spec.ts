import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSchoolComponent } from './list-school.component';

describe('ListSchoolComponent', () => {
  let component: ListSchoolComponent;
  let fixture: ComponentFixture<ListSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
