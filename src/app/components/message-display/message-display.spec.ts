import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDisplayComponent } from './message-display';
import {MessageService } from '../../services/message.service';
import { MessageComponent } from '../message/message.component';

describe('MessageDisplatComponent', () => {
  let component: MessageDisplayComponent;
  let fixture: ComponentFixture<MessageDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDisplayComponent, MessageComponent ],
      providers:[ MessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
