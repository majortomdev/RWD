import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent {

  loginForm: FormGroup;
  errorMsg: any;

  constructor(
    private aformBuilder: FormBuilder,
    private router: Router,
    private authSvc: AuthService
    ) {
      this.loginForm = this.aformBuilder.group(
       {
         username: ['', [Validators.required, Validators.minLength(5), Validators.email]],
         password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]

        // username: [''],
        // password: ['']
      }
      );
   }


   onLogin() {
     this.authSvc.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
      .subscribe(
       (user: User) => {
         if (user) {
           this.authSvc.errorMsg = null;
           this.router.navigate(['list-user']);
         } else {
          this.authSvc.errorMsg = null;
          this.errorMsg = 'username and/or password do not match jimmy';
           this.router.navigate(['sign-in']);
         }
       }
     );
   }

}
