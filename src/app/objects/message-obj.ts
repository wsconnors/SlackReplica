export class MessageObj {
  private messageContent:string;
  private fromUser:string
  private messageId:number;
  private timeStamp:Date;


  constructor(json:any){
    this.messageContent = json.messageContent;
    this.fromUser = json.userName;
    this.messageId = json.messageId;
    this.timeStamp = json.timeStamp;
  }

  getMessageContent():string{
    return this.messageContent;
  }
  setMessageContent(newContent:string){
    this.messageContent = newContent;
  }
  getMessageId():number{
    return this.messageId;
  }
}
