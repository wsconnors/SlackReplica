import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { MessageObj } from '../../style/message-obj'
import { MessageService }from '../../services/message.service'

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css']
})
export class ActiveChatComponent {

  messages:MessageObj[];

  constructor(private messageService:MessageService){
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages
    });
  }
}
