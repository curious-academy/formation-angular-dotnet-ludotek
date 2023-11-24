import { TestBed } from '@angular/core/testing';

import { BookFeaturesService } from './book-features.service';

describe('BookFeaturesService', () => {
  let service: BookFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
