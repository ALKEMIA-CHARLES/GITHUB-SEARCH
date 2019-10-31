import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainpartComponent } from './mainpart/mainpart.component';
import { ShowReposComponent } from './show-repos/show-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpartComponent,
    ShowReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
