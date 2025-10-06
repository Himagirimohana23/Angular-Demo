import { TestBed } from '@angular/core/testing';

import { Productpageservice } from './productpageservice';

describe('Productpageservice', () => {
  let service: Productpageservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productpageservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
