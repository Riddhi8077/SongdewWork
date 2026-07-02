import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-entry',
  standalone: true,
  
  imports: [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule
],
  templateUrl: './data-entry.html',
  styleUrls: ['./data-entry.css']
})
export class DataEntry {

  employeeForm: FormGroup;

  searchPhone: string = '';

  employeeData: any = null;

  private scriptURL = 'https://script.google.com/macros/s/AKfycbwEbNC73P8ftODwaqU4qt1yEqVnADVAu2NUo7tz2O4r4cnH-KupRO9tfgcd45GTkHnpuQ/exec';

  constructor(
  private fb: FormBuilder,
  private http: HttpClient,
  private router: Router
) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      department: ['', Validators.required]
    });

  }

  submitForm() {

  if (this.employeeForm.invalid) {
    this.employeeForm.markAllAsTouched();
    return;
  }

  const formData = new URLSearchParams();

  formData.append('firstName', this.employeeForm.value.firstName);
  formData.append('lastName', this.employeeForm.value.lastName);
  formData.append('email', this.employeeForm.value.email);
  formData.append('phone', this.employeeForm.value.phone);
  formData.append('department', this.employeeForm.value.department);

  fetch(this.scriptURL, {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
  })
  .then(() => {
    alert('Employee Added Successfully!');
    this.employeeForm.reset();
  })
  .catch((err) => {
    console.error(err);
    alert('Failed to save data');
  });

}

searchEmployee() {

  if (!this.searchPhone) {
    alert("Please enter a mobile number");
    return;
  }

  this.http
    .get<any>(this.scriptURL + "?phone=" + this.searchPhone)
    .subscribe({

      next: (res) => {

        console.log(res);

        if (res.found) {

          this.employeeData = res.employee;

        } else {

          this.employeeData = null;
          alert("Employee not found");

        }

      },

      error: (err) => {

        console.log(err);
        alert("Something went wrong.");

      }

    });

}

logout() {

  const confirmLogout = confirm("Are you sure you want to logout?");

  if (!confirmLogout) {
    return;
  }

  localStorage.removeItem("token");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("email");

  this.router.navigate(['/']);

}

}