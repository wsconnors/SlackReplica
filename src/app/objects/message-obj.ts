export class MessageObj {
  private message:string;
<<<<<<< HEAD
  private messageId:string;
=======
  private messageId:number;
>>>>>>> da7249b84edfc8e7cc17d054b789f88f0316eed8
  private userId:number
  private time:Date

  constructor(input:string){
    this.message = input;
    this.messageId = MessageObj.generateId();
    this.userId = 0; //Switch with more users
    this.time = new Date();
  }
  setMessage(newMessage:string){
    this.message = newMessage;
  }
  getMessage():string{
    return this.message;
  }
  getMessageId():number{
    return this.messageId;
  }
  getUserId():number{
    return this.userId;
  }
  getTime():Date{
    return this.time
  }

  private static generateId():number{
    return new Date().getTime();
  }
}
