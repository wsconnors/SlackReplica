import { Injectable } from '@angular/core';
import { MessageObj } from '../objects/message-obj';
import { MessageObjects } from '../data/data'

@Injectable()
export class CreateMessageService {

  constructor() { }

  addMessage(message:string){
    let newMessage:MessageObj = new MessageObj(message);
    MessageObjects.push(newMessage);
  }

}
