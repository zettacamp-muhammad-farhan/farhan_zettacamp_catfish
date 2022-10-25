import { TestBed } from '@angular/core/testing';

import { BookManagementService } from './book-management.service';

describe('BookManagementService', () => {
  let service: BookManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
