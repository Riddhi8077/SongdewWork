import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginForm: FormGroup;

constructor(
  private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {

  if (this.loginForm.invalid) {

    this.loginForm.markAllAsTouched();

    return;

  }

  this.authService.login(

    this.loginForm.value.email,
    this.loginForm.value.password

  ).subscribe({
    next: (res: any) => {

  console.log("TYPE:", typeof res);
  console.log("RESPONSE:", res);
  console.log("JSON:", JSON.stringify(res));
  console.log("Token:", res.result.token);
  console.log("Complete Response:", res);
  
  // Save login information
  localStorage.setItem("token", res.result.token);
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("email", this.loginForm.value.email);

  alert("Login Successful");

  // Navigate to Employee Form
  this.router.navigate(['/employee']);

},

  });

}

}