import { TestBed, inject } from '@angular/core/testing';

import { CreateMessageService } from './create-message.service';

describe('CreateMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateMessageService]
    });
  });

  it('should be created', inject([CreateMessageService], (service: CreateMessageService) => {
    expect(service).toBeTruthy();
  }));
});
