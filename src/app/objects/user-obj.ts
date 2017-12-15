import { Profile } from './profile-obj'
export class User{
  private userName:string;
  private password:string;
  private profile:Profile;

  constructor(userName:string, password:string){
    this.userName = userName;
    this.password = password;
    this.profile = new Profile();
  }

  getUserName():string{
    return this.userName;
  }
  getPassword():string{
    return this.password;
  }

  getProfile():Profile{
    return this.profile;
  }

}
