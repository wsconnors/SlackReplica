import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from '../../services/message.service';
import { MessageComponent } from '../message/message.component'
import { PostMessage } from './post-message.component';

describe('PostMessage', () => {
  let component: PostMessage;
  let fixture: ComponentFixture<PostMessage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMessage, MessageComponent ],
      providers: [MessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
