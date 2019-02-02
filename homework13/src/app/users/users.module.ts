import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserscompComponent } from './userscomp/userscomp.component';
import { RouterModule } from '@angular/router';
import { UserdetailscompComponent } from './userdetailscomp/userdetailscomp.component';
import { mygaurdGuard } from '../mygaurd.guard';

@NgModule({
  declarations: [UserscompComponent, UserdetailscompComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UserscompComponent },
      {
        path: 'userdetails/:uuid', component: UserdetailscompComponent

      }])
  ],
  exports: [UserscompComponent, UserdetailscompComponent]

})
export class UsersModule { }
