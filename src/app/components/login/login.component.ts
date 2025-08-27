import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm!: FormGroup;
  isLoading = false;
  showPassword = false;
  rememberMe = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Login attempt:', this.loginForm.value);
        
        // Simulate successful login
        this.isLoading = false;
        
        // Navigate to dashboard or home page
        // this.router.navigate(['/dashboard']);
        
        alert('Login successful!');
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      this.markFormGroupTouched();
    }
  }

  markFormGroupTouched(): void {
    Object.keys(this.loginForm.controls).forEach(field => {
      const control = this.loginForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  // Demo methods for social login (implement as needed)
  loginWithGoogle(): void {
    console.log('Google login clicked');
    // Implement Google OAuth
  }

  loginWithFacebook(): void {
    console.log('Facebook login clicked');
    // Implement Facebook OAuth
  }

  forgotPassword(): void {
    console.log('Forgot password clicked');
    // Navigate to forgot password page
    // this.router.navigate(['/forgot-password']);
  }

  goToSignup(): void {
    console.log('Go to signup clicked');
    // Navigate to signup page
    // this.router.navigate(['/signup']);
  }
}

