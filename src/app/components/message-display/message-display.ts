import { Component, OnInit } from '@angular/core';
import { MessageObj } from '../../objects/message-obj'
import { MessageService } from '../../services/message.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.html',
  styleUrls: ['./message-display.css']
})
export class MessageDisplatComponent implements OnInit{
  private loading: boolean = false;
  private messages:Observable<any[]>

  // messageList:MessageObj[];

  constructor(private messageService:MessageService){
  }

  ngOnInit(){
    this.updateMessages();
  }

  updateMessages(){
    this.loading = true;
    this.messages = this.messageService.getMessages();
    // .subscribe(res => console.log("testing"+res));

    // this.messageService.getMessages().debounceTime(400).distinctUntilChanged().subscribe(m=> this.messageList = m);
    // this.messageService.getMessages().subscribe(data => {
    //   this.messages = data;
    //   // console.log(data)
    // });
  }


}
