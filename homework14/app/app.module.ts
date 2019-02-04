import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UserinfoService } from './userinfo.service';
import { HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [UserinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
