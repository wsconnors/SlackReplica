import { Injectable } from '@angular/core';
import { MessageObj } from '../objects/message-obj';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { MessageObjects } from '../data/data'
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

  constructor(private http: Http){}

  addMessage(message:string){
    let newMessage:MessageObj = new MessageObj(message);
    this.http.post('http://localhost:8080/messages',newMessage).subscribe(res => console.log(res));//.map((res: Response) => res.json());
    // MessageObjects.push(newMessage);
  }

  getMessages(): Observable<MessageObj[]>{
    return this.http.get('http://localhost:8080/messages').map(arr =>{
      console.log(arr.json())
      return arr.json().map( message => {
        return {
          messageId: message.messageId,
          messageContent: message.messageContent,
          timeStamp: message.time,
          fromUser:message.fromUser,
          chatId:message.chatId
        };
      });
    });
  }

  deleteMessage(message:any){
    console.log(message);
    this.http.delete('http://localhost:8080/messages/'+message.messageId).subscribe();
  }

  editMessageByMessageId(updatedMessage: any){
    this.http.put('http://localhost:8080/messages/'+updatedMessage.messageId,updatedMessage).subscribe();
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
