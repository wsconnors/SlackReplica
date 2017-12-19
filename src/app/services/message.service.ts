import { Injectable } from '@angular/core';
import { MessageObj } from '../objects/message-obj';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { MessageObjects } from '../data/data'

@Injectable()
export class MessageService {

  getMessages(): Observable<MessageObj[]>{
    return Observable.of(MessageObjects);
  }

  deleteMessageByMessageId(messageId:number){
    MessageObjects.splice(this.getMessageIndexByMessageId(messageId),1);
  }

  editMessageByMessageId(messageId:number, newMessage:string):boolean{
    if (this.messageExists(messageId)){
      MessageObjects[this.getMessageIndexByMessageId(messageId)].setMessage(newMessage);
      return true;
    }
    return false;
  }

  private getMessageByMessageId(messageId:number):MessageObj{
    return MessageObjects[this.getMessageIndexByMessageId(messageId)];
  }

  private messageExists(messageId: number): boolean{
    if(this.getMessageByMessageId(messageId) != undefined){
      return true;
    }
    return false;
  }

  private getMessageIndexByMessageId(messageId:number):number{
    for (let i = 0; i < MessageObjects.length; i++) {
      if(MessageObjects[i].getMessageId()== messageId){
        return i;
      }
    }
  }
}
