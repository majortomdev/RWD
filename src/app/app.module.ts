import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppMaterialModule } from './app-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './page/footer/footer.component';
import { SignInComponent } from './page/login/sign-in/sign-in.component';
import { AddUserComponent } from './page/user/add-user/add-user.component';
import { EditUserComponent } from './page/user/edit-user/edit-user.component';
import { ListUserComponent } from './page/user/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SignInComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
