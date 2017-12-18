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
    testMessage1.setMessageId(0)
    MessageObjects.push(testMessage1);
    MessageObjects.push(testMessage2);
  });

  afterEach(()=>{
    MessageObjects.splice(0,MessageObjects.length);
  })

  // it('should get Observable of all objects', ()=>{
  //   expect(service.getAllMessages()).toBeTruthy();
  // })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should delete message by message Id',() =>{
    service.deleteMessageByMessageId(0);
    expect(service.editMessageByMessageId(0)).toBeFalsy();
  })

  it('should edit message by messageId (message does exist)', () => {
    service.editMessageByMessageId(0, 'goodbye');
    expect(service.getMessageByMessageId(0).getMessage()).toEqual('goodbye');
  });

  it('should edit message by messageId (message does not exist)', () => {
    expect(service.editMessageByMessageId(14, 'goodbye')).toBeFalsy();
  });


});

// it('should delete message by messageId', () =>{
//   service.deleteMessageByMessageId(0);
//   expect(service.getMessages()[0].message).toEqual('world');
// });

// it('should add message to service', () => {
//
// })

//
// it('should add a message to the message service', () => {
//
// });
//
// it('should get message', () => {
//   service.addMessageToService(testMessage1);
//   console.log(service.getMessage().map(val => val.json());
//   service.getMessage().toPromise().then( (result) =>{
//     console.log("result: "+result)
//     //expect(result.message).toEqual("helo")
//   });
// });


// it('should get all messages', () =>{
//   expect(service.getAllMessages()[0].message).toEqual('hello');
// });
//

//
// it('should add message', () =>{
//   expect(service.getAllMessages()[1].message).toEqual('world');
// });
//

//
// it('should get all messages by the specific date', () => {
//   expect(service.getMessagesbySpecificDay(2017, 12, 14)).toEqual(service.getAllMessages());
// });



//, inject([MessageService],(service: MessageService) =>{}));
