import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PersonsListService } from './persons-list.service';

describe('PersonsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: PersonsListService = TestBed.get(PersonsListService);
    expect(service).toBeTruthy();
  });
});
