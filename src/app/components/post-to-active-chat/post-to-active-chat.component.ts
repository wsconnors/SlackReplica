import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { MessageObj } from '../../style/message-obj'
import { CreateMessageService } from '../../services/create-message.service'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-post-to-active-chat',
  templateUrl: './post-to-active-chat.component.html',
  styleUrls: ['./post-to-active-chat.component.css']
})
export class PostToActiveChatComponent {
  constructor(private createMessageService:CreateMessageService){

  }

  makePost(message:any):void{
    this.createMessageService.addMessage(message.value);
    message.value = '';
  }
  
}
