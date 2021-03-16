import { TestBed } from '@angular/core/testing';

import { PhotodataService } from './photodata.service';

describe('PhotodataService', () => {
  let service: PhotodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
