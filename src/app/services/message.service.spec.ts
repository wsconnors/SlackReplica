import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';
import { MessageObj } from '../style/message-obj';

describe('MessageService', () => {
  let testMessage1:MessageObj;
  let testMessage2:MessageObj;
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.get(MessageService);
    testMessage1 = {message: "hello",messageId:0,userId:0,time: new Date()};
    testMessage2 = {message:"world",messageId:1,userId:0,time: new Date()};
    service.addMessage(testMessage1);
    service.addMessage(testMessage2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all messages', () =>{
    expect(service.getAllMessages()[0].message).toEqual('hello');
  });

  it('should get message by messageId (message exist)', () =>{
    expect(service.getMessageByMessageId(0).message).toEqual('hello');
  });

  it('should get message by messageId (message does not exist)', () =>{
    expect(service.getMessageByMessageId(10)).toBeUndefined();
  });

  it('should add message', () =>{
    expect(service.getAllMessages()[1].message).toEqual('world');
  });

  it('should delete message by messageId', () =>{
    service.deleteMessageByMessageId(0);
    expect(service.getAllMessages()[0].message).toEqual('world');
  });
  it('should edit message by messageId (message does exist)', () => {
    expect(service.editMessageByMessageId(0, 'goodbye') && service.getMessageByMessageId(0).message == 'goodbye').toBeTruthy();
    // expect(service.editMessageByMessageId(0, 'goodbye')).toBeTruthy();
    // expect(service.getMessageByMessageId(0).message).toEqual('goodbye');
  });
  it('should edit message by messageId (message does not exist)', () => {
    expect(service.editMessageByMessageId(14, 'goodbye')).toBeFalsy();
  });

  it('should get all messages by the specific date', () => {
    expect(service.getMessagesbySpecificDay(2017, 12, 13)).toEqual(service.getAllMessages());
  });


});


//, inject([MessageService],(service: MessageService) =>{}));
