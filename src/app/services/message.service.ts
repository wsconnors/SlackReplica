import { Injectable } from '@angular/core';
import { MessageObj } from '../style/message-obj';

@Injectable()
export class MessageService {
  messages: MessageObj[];

  constructor() {
    this.messages = [];
  }

  getAllMessages():MessageObj[]{
    return this.messages;
  }

  getMessageByMessageId(messageId:number):MessageObj{
    return this.messages[this.getMessageIndexByMessageId(messageId)];
  }

  addMessage(message: MessageObj){
    this.messages.push(message);
    console.log(this.messages);
  }

  deleteMessageByMessageId(messageId:number){
    this.messages.splice(this.getMessageIndexByMessageId(messageId),1);
  }

  getMessagesbySpecificDay(year:number,month:number,date:number):MessageObj[]{
    let messagesOfDay:MessageObj[] = []
    for (let i = 0; i < this.messages.length; i++) {
      let currentMessage = this.messages[i]
      let currentMessageTime = currentMessage.time;
      if(currentMessageTime.getDate() == date && currentMessageTime.getMonth() == month-1 && currentMessageTime.getFullYear() == year){
        messagesOfDay.push(currentMessage)
      }
    }
    return messagesOfDay;
  }

  editMessageByMessageId(messageId:number, newMessage:string):boolean{
    if (this.messageExists(messageId)){
      this.messages[this.getMessageIndexByMessageId(messageId)].message = newMessage;
      return true;
    }
    return false;
  }

  private messageExists(messageId: number): boolean{
    if(this.getMessageByMessageId(messageId) != undefined){
      return true;
    }
    return false;

  }

  private getMessageIndexByMessageId(messageId:number):number{
    for (let i = 0; i < this.messages.length; i++) {
      if(this.messages[i].messageId == messageId){
        return i;
      }
    }
  }
}
