import { Component, OnInit,Output,EventEmitter, OnDestroy } from '@angular/core';
import { MessageObj } from '../../style/message-obj'
import { MessageService }from '../../services/message.service'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css']
})
export class ActiveChatComponent {//implements OnDestroy{//implements OnInit {
  // message:MessageObj;
  messages:MessageObj[];
  subscription:Subscription;

  constructor(private messageService:MessageService){
    this.subscription = this.messageService.getMessages().subscribe(messages => {
      this.messages = messages
    });
    //document.getElementById("lastpost").scrollIntoView(true)
  }


  // ngOnDestroy(){
  //   this.subscription.unsubscribe()
  // }

}


//   constructor(private service:MessageService) {
//
//   }
//
//   ngOnInit() {
//     // this.messages = this.service.getMessagesByUserId(0)
//     this.messages = this.service.getAllMessages()
//   }
//
// }
