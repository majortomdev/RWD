import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { AppMaterialModule } from './app-material.module';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './page/footer/footer.component';
import { SignInComponent } from './page/login/sign-in/sign-in.component';
import { AddUserComponent } from './page/user/add-user/add-user.component';
import { EditUserComponent } from './page/user/edit-user/edit-user.component';
import { ListUserComponent } from './page/user/list-user/list-user.component';
import { AuthService } from './service/auth.service';
import { SignUpComponent } from './page/login/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
    // HttpModule
  ],
  exports: [
   // HttpModule
  ],
  providers: [
    AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
