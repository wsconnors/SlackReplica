import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { MessageObj } from '../../objects/message-obj'
import { MessageService } from '../../services/message.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.html',
  styleUrls: ['./message-display.css']
})
export class MessageDisplayComponent implements OnInit{
  private loading: boolean = false;
  private messages:Observable<any[]>

  constructor(private messageService:MessageService){
  }

  display(){

  }

  onDelete(){

  }

  ngOnInit(){
    this.updateMessages();
  }

  // ngAfterViewChecked(){
  //
  // }

  updateMessages(){
    this.loading = true;
    this.messages = this.messageService.getAllMessages();
  }


}
