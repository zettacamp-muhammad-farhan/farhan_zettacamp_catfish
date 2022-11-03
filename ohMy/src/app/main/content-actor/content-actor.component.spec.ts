import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentActorComponent } from './content-actor.component';

describe('ContentActorComponent', () => {
  let component: ContentActorComponent;
  let fixture: ComponentFixture<ContentActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentActorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
