import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActiveChatComponent } from './components/active-chat/active-chat.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { PostToActiveChatComponent } from './components/post-to-active-chat/post-to-active-chat.component';
import { MessageService} from './services/message.service';
import { CreateMessageService} from './services/create-message.service';
import { PostComponent } from './components/post/post.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ActiveChatComponent,
        ActiveUsersComponent,
        PostToActiveChatComponent,
        PostComponent
      ],
      providers:[ MessageService,
      CreateMessageService ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
