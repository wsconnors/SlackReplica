import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Subscription } from 'rxjs/Subscription';
import { MessageObjects } from '../../data/data';

@Component({
  selector: 'app-post-to-active-chat',
  templateUrl: './post-to-active-chat.component.html',
  styleUrls: ['./post-to-active-chat.component.css']
})
export class PostToActiveChatComponent {
  constructor(private messageService:MessageService){
  }

  makePost(message:HTMLDataElement):void{
    this.messageService.addMessage(message.value);
    // MessageService.u
    message.value = '';
  }

}
