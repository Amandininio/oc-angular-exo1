import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostListItemsComponent } from './post-list-items/post-list-items.component';
import { HeaderComponent } from './header/header.component';
import { PostService } from './services/posts.service';


@NgModule({
  declarations: [
    AppComponent,
    PostListItemsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

