import { Injectable } from '@angular/core';
import { User } from '../objects/user-obj';

@Injectable()
export class LogInService {

  constructor() { }

  // checkForUserName(userName: String): boolean{
  //   for(let user of Users){
  //     if(userName === user.getUserName()){
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  //
  // getUser(userName: String): User{
  //   for(let user of Users){
  //     if(userName === user.getUserName()){
  //       return user;
  //     }
  //   }
  //   return null;
  // }
  //
  // checkUserNameAndPassword(userName:string, password:string): boolean{
  //   let user:User = this.getUser(userName);
  //   if(user.getPassword() === password) return true;
  //   return false;
  // }
  //
  // logIn(user:User):void{
  //   ActiveUser.push(user);
  // }
  //
  // logOut(user:User):void{
  //   for(let i = 0; i < ActiveUser.length; i++){
  //     if(user === ActiveUser[i])ActiveUser.splice(i, 1);
  //   }
  // }

}
