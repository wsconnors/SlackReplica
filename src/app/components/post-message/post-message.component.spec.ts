import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from '../../services/message.service';
import { MessageComponent } from '../message/message.component'
import { PostMessageComponent } from './post-message.component';

describe('PostMessage', () => {
  let component: PostMessageComponent;
  let fixture: ComponentFixture<PostMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMessageComponent, MessageComponent ],
      providers: [MessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
