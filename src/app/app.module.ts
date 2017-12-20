import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessageDisplatComponent } from './components/message-display/message-display';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { PostMessageComponent } from './components/post-message/post-message.component';
import { MessageComponent } from './components/message/message.component';
import { MessageService } from './services/message.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    MessageDisplatComponent,
    ActiveUsersComponent,
    PostMessageComponent,
    MessageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
