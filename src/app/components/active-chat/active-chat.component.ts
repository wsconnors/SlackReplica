import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { MessageObj } from '../../objects/message-obj'
import { MessageService }from '../../services/message.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css']
})
export class ActiveChatComponent implements OnInit{
  private loading:boolean = false;
  private messages:Observable<MessageObj[]>

  messageList:MessageObj[];

  constructor(private messageService:MessageService){
  }

  ngOnInit(){
    this.updateMessages();
  }

  updateMessages(){
    this.loading = true;
    this.messages = this.messageService.getMessages();

    // this.messageService.getMessages().debounceTime(400).distinctUntilChanged().subscribe(m=> this.messageList = m);
    // this.messageService.getMessages().subscribe(data => {
    //   this.messages = data;
    //   // console.log(data)
    // });
  }


}
