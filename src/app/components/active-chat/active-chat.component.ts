import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { MessageObj } from '../../objects/message-obj'
import { MessageService }from '../../services/message.service'


@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css']
})
export class ActiveChatComponent implements OnInit{

  messageList:MessageObj[];

  constructor(private messageService:MessageService){
  }

  ngOnInit(){
    this.messageService.getMessages().subscribe(messages => {
      this.messageList = messages
    });
  }
}
