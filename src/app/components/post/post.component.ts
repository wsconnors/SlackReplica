import { Component, OnInit,Input } from '@angular/core';
import { MessageObj } from '../../objects/message-obj'
import { MessageService } from '../../services/message.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() message:any;
  edit:boolean;
  constructor(private messageService:MessageService) {
    this.edit = false;
  }

  ngOnInit() {
  }

  editPost(newInput:string){
    this.message.messageContent = newInput
    this.messageService.editMessageByMessageId(this.message);
    this.toggleEdit();
  }

  toggleEdit(){
    this.edit = !this.edit
  }

  deleteMessage():void{
    //console.log(this.message);
    this.messageService.deleteMessage(this.message);
  }

}
