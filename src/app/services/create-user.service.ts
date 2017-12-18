import { Injectable } from '@angular/core';
import { User } from '../objects/user-obj';
import { Users } from '../data/data';

@Injectable()
export class CreateUserService {

  constructor() { }

  createUser(userName:string, password:string){
    let newUser: User = new User(userName, password);
    Users.push(newUser);
  }

  // editProfileName(user:User, name:string){
  //   user.profile.name = name;
  // }

  /*cannot edit your profile name because it is private and I have no access
  outside of the user class*/

  changeUserName(userName:string, user:User):void{
    user.setUserName(userName);
  }

  changePassword(password:string, user:User):void{
    user.setPassWord(password);
  }

}
