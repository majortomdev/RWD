import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './page/login/sign-in/sign-in.component';
import { SignUpComponent } from './page/login/sign-up/sign-up.component';
import { AuthGuard } from './util/auth.guard';
import { ListUserComponent } from './page/user/list-user/list-user.component';
import { AddUserComponent } from './page/user/add-user/add-user.component';
import { EditUserComponent } from './page/user/edit-user/edit-user.component';

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},

  {path: '', redirectTo: 'list-user', pathMatch: 'full', canActivate: [AuthGuard]},

  {path: 'list-user', component: ListUserComponent, canActivate: [AuthGuard]}, // canActivate auth cheks by
  {path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard]}, // localStorage toekn check
  {path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
