import { Injectable } from '@angular/core';
import { MessageObj } from '../objects/message-obj';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {
  uri:string = 'http://localhost:8080/messages/';

  constructor(private http: Http){}

  createMessage(message:string,fromUser:string){
    let newMessage =
    {
      messageContent:message,
      fromUser:fromUser
    };
    this.postMessage(newMessage)
  }

  postMessage(newMessage:any){
    this.http.post(this.uri,newMessage).subscribe();
  }

  getMessageById(messageId:number):Observable<MessageObj>{
    return this.http.get(this.uri+messageId).map(message =>{
      return new MessageObj(message);
    });
  }

  getAllMessages(): Observable<MessageObj[]>{
    return this.http.get(this.uri).map(arr =>{
      return arr.json().map( message => {
        return new MessageObj(message);
      });
    });
  }

  deleteMessage(message:MessageObj) {
    console.log(message);
    return this.http.delete(this.uri+message.getMessageId()).subscribe();
  }

  editMessage(message: MessageObj,newInput:string){
    message.setMessageContent(newInput)
    this.http.put(this.uri+message.getMessageId(),message).subscribe();
  }

}
