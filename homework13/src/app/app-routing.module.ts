import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{path:'',component:AppComponent},
{path:'users',loadChildren:'./users/uesrs.module#UsersModule'},
{path:'userdetails',loadChildren:'./users/uesrdetailscomp.module#UsersModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
