//
// import { TestBed, inject } from '@angular/core/testing';
// import { MessageService } from './message.service';
// import { MessageObj } from '../objects/message-obj';
// // import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
// import { MockBackend, MockConnection } from '@angular/http/testing';
//
//
// describe('MessageService', () => {
//   let testMessage1:MessageObj;
//   let backEnd: MockBackend;
//   let service;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [MessageService,MockBackend,BaseRequestOptions{
//         providers: Http,
//         useFactory: (backEnd: MockBackend,defaultOptions:BaseRequestOptions)=>{
//           return new Http(backEnd,defaultOptions);
//         },
//         deps: [MockBackend,BaseRequestOptions]
//       }]
//     });
//     this.service = TestBed.get(MessageService);
//   });
//
//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
//
// }
