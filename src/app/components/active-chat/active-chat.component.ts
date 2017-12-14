import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css']
})
export class ActiveChatComponent implements OnInit {

  name:string;

  @Output()
  nameChange:EventEmitter<string>  = new EventEmitter();


  observer = {
    next:(value) => {
      this.name = value;
      this.nameChange.emit(this.name)
    },
    error:function(vlaue){

    },
    complete:function(value){

    }
  }

  constructor() { }

  ngOnInit() {
  }

}
