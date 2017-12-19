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

  getMessages(): Observable<MessageObj[]>{
    // return Observable.of(MessageObjects(this.http));
    return this.http.get('http://localhost:8080/messages').map(arr =>{
      return arr.json().map( message => {
        return new MessageObj(message.messageBody);
      });
    });
  }

  deleteMessageByMessageId(messageId:number){
    console.log(messageId);
    this.http.delete('http://localhost:8080/messages/'+messageId);
    //MessageObjects.splice(this.getMessageIndexByMessageId(messageId),1);
  }

  editMessageByMessageId(updatedMessage: any){
    this.http.put('http://localhost:8080/messages/'+updatedMessage.messageId,JSON.parse(JSON.stringify(updatedMessage)));
    // if (this.messageExists(messageId)){
    //   MessageObjects[this.getMessageIndexByMessageId(messageId)].setMessage(newMessage);
    //   return true;
    // }
    // return false;
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


//   messages: MessageObj[];
//
//   constructor() {
//     this.messages = [];
//   }
//

//

//
//   addMessage(message: MessageObj){
//     this.messages.push(message);
//     console.log("add message: "+message);
//   }
//

//
//   getMessagesbySpecificDay(year:number,month:number,date:number):MessageObj[]{
//     let messagesOfDay:MessageObj[] = []
//     for (let i = 0; i < this.messages.length; i++) {
//       let currentMessage = this.messages[i]
//       let currentMessageTime = currentMessage.time;
//       if(currentMessageTime.getDate() == date && currentMessageTime.getMonth() == month-1 && currentMessageTime.getFullYear() == year){
//         messagesOfDay.push(currentMessage)
//       }
//     }
//     return messagesOfDay;
//   }
//

//
//   getMessagesByUserId(userId:number){
//     let newMessageList:MessageObj[] = [];
//     for (let i = 0; i < this.messages.length; i++) {
//         if(this.messages[i].userId == userId){
//           newMessageList.push(this.messages[i]);
//         }
//     }
//     console.log(newMessageList)
//     this.messages = newMessageList;
//   }
//

//
// }
