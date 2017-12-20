import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Subscription } from 'rxjs/Subscription';
import { MessageObjects } from '../../data/data';

@Component({
  selector: 'app-post-message',
  templateUrl: './post-message.component.html',
  styleUrls: ['./post-message.component.css']
})
export class PostMessageComponent {
  constructor(private messageService:MessageService){
  }

  makePost(message:HTMLDataElement):void{
    this.messageService.addMessage(message.value);
    // MessageService.u
    message.value = '';
  }

}
