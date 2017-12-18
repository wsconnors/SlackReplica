import { TestBed, inject } from '@angular/core/testing';

import { CreateMessageService } from './create-message.service';

describe('CreateMessageService', () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateMessageService]
    });
    this.service = TestBed.get(CreateMessageService)
  });

  it('should be created', () => {
    expect(this.service).toBeTruthy();
  });

});
