export class MessageObj {
  private messageBody:string;
  private messageId:number;
  private userName:string
  // private time:Date



  constructor(input:string){
    this.messageBody = input;
    this.messageId = MessageObj.generateId();
    this.userName = ""; //Switch with more users
    // this.time = new Date();
  }
  setMessage(newMessage:string){
    this.messageBody = newMessage;
  }
  getMessage():string{
    return this.messageBody;
  }
  getMessageId():number{
    return this.messageId;
  }
  getUserId():string{
    return this.userName;
  }
  // getTime():Date{
  //   return this.time
  // }

  // just for testing
  setMessageId(id:number){
    this.messageId = id;
  }

  private static generateId():number{
    return new Date().getTime();
  }
}
