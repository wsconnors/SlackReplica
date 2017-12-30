import { TestBed, inject } from '@angular/core/testing';
import { User } from '../objects/user-obj';
import { LogInService } from './log-in.service';

describe('LogInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogInService]
    });
  });

  it('should be created', inject([LogInService], (service: LogInService) => {
    expect(service).toBeTruthy();
  }));

  // it('should check for a user name', inject([LogInService], (service: LogInService) => {
  //   expect(service.checkForUserName('donald')).toBe(true);
  // }));
  //
  // it('should return a user object', inject([LogInService], (service: LogInService) => {
  //   let user:User = service.getUser('wes');
  //   expect(user.getUserName()).toMatch('wes');
  // }));
  //
  // it('should check if userName and password match', inject([LogInService], (service: LogInService) => {
  //   expect(service.checkUserNameAndPassword('wes', 'password3')).toBe(true);
  // }));
  //
  // it('should add a user to the active users', inject([LogInService], (service: LogInService) => {
  //   service.logIn(service.getUser('donald'));
  //   expect(ActiveUser[0].getUserName()).toMatch('donald');
  // }));
  //
  // it('should take a user out of the active user array', inject([LogInService], (service: LogInService) => {
  //   service.logOut(service.getUser('donald'));
  //   service.logIn(service.getUser('wes'));
  //   service.logOut(service.getUser('wes'));
  //   expect(ActiveUser.length).toBe(0);
  // }));
});
