import { Injectable } from '@angular/core';
import { MessageObj } from '../objects/message-obj';
import { MessageObjects } from '../data/data'
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateMessageService {

  constructor(private http: Http) { }

  addMessage(message:string){
    let newMessage:MessageObj = new MessageObj(message);
    this.http.post('http://localhost:8080/messages',newMessage).subscribe(res => console.log(res));//.map((res: Response) => res.json());
    // MessageObjects.push(newMessage);
  }
}
