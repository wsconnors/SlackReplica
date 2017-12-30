import { Component, OnInit,Input } from '@angular/core';
import { MessageObj } from '../../objects/message-obj'
import { MessageService } from '../../services/message.service'

@Component({
  selector: 'app-post',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message:MessageObj;
  edit:boolean;
  constructor(private messageService:MessageService) {
    this.edit = false;
  }
  ngOnInit() {}

  editPost(newInput:string){
    this.messageService.editMessage(this.message,newInput);
    this.toggleEdit();
  }

  toggleEdit(){
    this.edit = !this.edit
  }

  deleteMessage():void{
    this.messageService.deleteMessage(this.message);
  }

}
