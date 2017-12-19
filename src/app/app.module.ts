import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ActiveChatComponent } from './components/active-chat/active-chat.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { PostToActiveChatComponent } from './components/post-to-active-chat/post-to-active-chat.component';
import { PostComponent } from './components/post/post.component';
import { MessageService } from './services/message.service';
import { CreateMessageService } from './services/create-message.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ActiveChatComponent,
    ActiveUsersComponent,
    PostToActiveChatComponent,
    PostComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [MessageService,CreateMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
