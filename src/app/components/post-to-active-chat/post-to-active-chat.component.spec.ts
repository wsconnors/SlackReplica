import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from '../../services/message.service';
import { PostComponent } from '../../components/post/post.component'
import { PostToActiveChatComponent } from './post-to-active-chat.component';
import { CreateMessageService } from '../../services/create-message.service';

describe('PostToActiveChatComponent', () => {
  let component: PostToActiveChatComponent;
  let fixture: ComponentFixture<PostToActiveChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostToActiveChatComponent, PostComponent ],
      providers: [MessageService, CreateMessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostToActiveChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
