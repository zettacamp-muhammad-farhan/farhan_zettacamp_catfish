import { TestBed } from '@angular/core/testing';

import { MenuManService } from './menu-man.service';

describe('MenuManService', () => {
  let service: MenuManService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuManService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
