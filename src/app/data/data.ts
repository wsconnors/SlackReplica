import { MessageObj } from '../objects/message-obj'
import { User } from '../objects/user-obj'
import { Http, Response } from '@angular/http';

export var MessageObjects = [];//(http:Http) => messages(http);

// function messages(http:Http):Observable<MessageObj[]>{
//   const newArr:MessageObj[] = []
//   console.log(newArr)
//   return http.get('http://localhost:8080/messages').map(arr =>{
//     return arr.json().results.map( message => {
//       return new MessageObj(message.messageBody);
//     });
//   });
// }
// return this.http.get('http://localhost:8080/messages').map(
//       (response: Response) => {response.json();}
// );

export var Users:User[] = [
  new User("ryan","password1"),
  new User("donald","password2"),
  new User("wes","password3")
];

export var ActiveUser:User[] = [];
