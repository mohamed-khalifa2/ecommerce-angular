import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authHttp: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: '',
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {

    if (this.loginForm.valid) {
      const user = this.loginForm.value
      this.authHttp.userLogin(user).subscribe({
        next: (res: any) => {
          sessionStorage.setItem("token", res.token);
          this.router.navigate(['/']);
        }, error: (err) => { console.log(err) }
      })

    }
  }
}
