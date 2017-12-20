import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDisplatComponent } from './message-display';
import {MessageService } from '../../services/message.service';
import { MessageComponent } from '../message/message.component';

describe('MessageDisplatComponent', () => {
  let component: MessageDisplatComponent;
  let fixture: ComponentFixture<MessageDisplatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDisplatComponent, MessageComponent ],
      providers:[ MessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDisplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
