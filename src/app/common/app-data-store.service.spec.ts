import { TestBed, inject } from '@angular/core/testing';

import { AppDataStoreService } from './app-data-store.service';

describe('AppDataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppDataStoreService]
    });
  });

  it('should ...', inject([AppDataStoreService], (service: AppDataStoreService) => {
    expect(service).toBeTruthy();
  }));
});
