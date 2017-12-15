import { TestBed, inject } from '@angular/core/testing';

import { CreateMessageService } from './create-message.service';

describe('CreateMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateMessageService]
    });
    const service = TestBed.get(CreateMessageService)
  });

  it('should be created', () => {
    expect(this.service).toBeTruthy();
  });

  it('should create a message object', () => {
    expect(this.service.createMessageObj('hello').message).toEqual('hello');
  });
  
});
