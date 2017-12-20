export class MessageObj {
  private messageContent:string;
  private messageId:number;
  private fromUser:string
  private toChat:number;
  private timeStamp:Date



  constructor(input:string){
    this.messageContent = input;
    this.messageId = MessageObj.generateId();
    this.fromUser = ""; //Switch with more users
    this.toChat = 0;
    // this.time = new Date();
  }
  setMessage(newMessage:string){
    this.messageContent = newMessage;
  }
  getMessage():string{
    return this.messageContent;
  }
  getMessageId():number{
    return this.messageId;
  }
  getUserId():string{
    return this.fromUser;
  }
  getToChat():number{
    return this.toChat
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
