import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot([
      // { path: '', component: AppComponent },
      { path: 'users', loadChildren: './users/users.module#UsersModule' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
