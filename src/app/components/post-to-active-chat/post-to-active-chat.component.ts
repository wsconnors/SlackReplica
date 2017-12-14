import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { MessageObj } from '../../style/message-obj'
import { MessageService } from '../../services/message.service'
//import {ActiveUsersService} from '../../services/active-user.service'

@Component({
  selector: 'app-post-to-active-chat',
  templateUrl: './post-to-active-chat.component.html',
  styleUrls: ['./post-to-active-chat.component.css'],
  providers: [MessageService]
})
export class PostToActiveChatComponent implements OnInit {

  constructor(private service:MessageService) {
  }
  ngOnInit() {
  }

  createMessage(message:any){
    let messageObj:MessageObj = {
      message:message.value,
      messageId: this.generateId(),
      userId: 0,
      time: new Date()
    }
    message.value = "";
    this.postMessage(messageObj);
  }

  postMessage(messageObj:MessageObj){
    this.service.addMessage(messageObj);

    // console.log(messageObj.time.getDate());
    // console.log(messageObj.time.getMonth());
    // console.log(messageObj.time.getFullYear());

    //send to service
  }

  generateId():number{
    return new Date().getTime();
  }

}
