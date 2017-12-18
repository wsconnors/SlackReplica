import { TestBed, inject } from '@angular/core/testing';
import { MessageObjects } from '../data/data'
import { MessageService } from './message.service';
import { MessageObj } from '../objects/message-obj';

describe('MessageService', () => {
  let testMessage1:MessageObj;
  let testMessage2:MessageObj;
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.get(MessageService);
    testMessage1 = new MessageObj("hello");
    testMessage2 = new MessageObj("world");
    MessageObjects.push(testMessage1);
    MessageObjects.push(testMessage2);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get message by messageId (message exist)', () =>{
    expect(service.getMessageByMessageId(0).message).toEqual('hello');
  });

  it('should get message by messageId (message does not exist)', () =>{
    expect(service.getMessageByMessageId(10)).toBeUndefined();
  });

  it('should edit message by messageId (message does exist)', () => {
    service.editMessageByMessageId(0, 'goodbye');
    expect(service.getMessageByMessageId(0).message).toEqual('goodbye');
  });
  it('should edit message by messageId (message does not exist)', () => {
    expect(service.editMessageByMessageId(14, 'goodbye')).toBeFalsy();
  });

});
