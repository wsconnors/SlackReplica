import { TestBed, inject } from '@angular/core/testing';
import { CreateUserService } from './create-user.service';

describe('CreateUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateUserService]
    });
  });

  it('should be created', inject([CreateUserService], (service: CreateUserService) => {
    expect(service).toBeTruthy();
  }));

  // it('should create a user object', inject([CreateUserService], (service: CreateUserService) => {
  //   service.createUser('Merin', 'password4');
  //   expect('Merin').toMatch(Users[3].getUserName());
  // }));
  //
  // it('should change user name', inject([CreateUserService], (service: CreateUserService) => {
  //   service.changeUserName('Merin', Users[0]);
  //   expect('Merin').toMatch(Users[0].getUserName());
  // }));
  //
  // it('should changr user password', inject([CreateUserService], (service: CreateUserService) => {
  //   service.changePassword('pass', Users[0]);
  //   expect('pass').toMatch(Users[0].getPassword());
  // }));
});
