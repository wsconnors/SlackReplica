import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-message',
  templateUrl: './post-message.component.html',
  styleUrls: ['./post-message.component.css']
})
export class PostMessageComponent {
  constructor(private messageService: MessageService) {
  }

  makePost(message: HTMLDataElement): void {
    let fromUser = ""//addusername in
    this.messageService.createMessage(message.value,fromUser);
    message.value = '';
  }

}
