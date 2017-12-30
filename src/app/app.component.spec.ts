import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MessageDisplayComponent } from './components/message-display/message-display';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { PostMessageComponent } from './components/post-message/post-message.component';
import { MessageService} from './services/message.service';
import { MessageComponent } from './components/message/message.component';
import { Http, Response,HttpModule,ConnectionBackEnd } from '@angular/http';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[ MessageService, Http,ConnectionBackEnd ],
      declarations: [
        AppComponent,
        MessageDisplayComponent,
        ActiveUsersComponent,
        PostMessageComponent,
        MessageComponent
      ],

      imports: [ HttpModule]
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
