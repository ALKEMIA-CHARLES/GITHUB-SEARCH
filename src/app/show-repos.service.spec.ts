import { TestBed } from '@angular/core/testing';

import { ShowReposService } from './show-repos.service';

describe('ShowReposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowReposService = TestBed.get(ShowReposService);
    expect(service).toBeTruthy();
  });
});
