import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/index/app.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FetchCommentService} from './service/fetch/fetch-comment.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentCardComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FetchCommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
