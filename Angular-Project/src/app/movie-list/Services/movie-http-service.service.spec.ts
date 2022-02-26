import { TestBed } from '@angular/core/testing';

import { MovieHttpServiceService } from './movie-http-service.service';

describe('MovieHttpServiceService', () => {
  let service: MovieHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
