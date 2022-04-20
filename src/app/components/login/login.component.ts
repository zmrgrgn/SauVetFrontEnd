import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  rememberMe: boolean = false;
  rememberedEmail: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      let user = Object.assign({}, this.loginForm.value);
      this.authService.login(user).subscribe(successResponse => {
        this.localStorageService.add("token", successResponse.data.token);
       
        this.authService.isLoggedIn = true;
        this.router.navigateByUrl('/hayvanKayits/getall')
        this.toastrService.success("İşlem başarılı", "Giriş yapıldı");
      }, errorResponse => {
        this.authService.isLoggedIn = false;
        this.toastrService.error(errorResponse.error.message, "Giriş yapılamadı");
      })
    }
  }
  autoFillEmail() {
    if (this.rememberedEmail) {
      let email = this.localStorageService.getItem("remember");
      if (email != null) {
        this.loginForm.get("email")?.setValue(email);
      }
    }
  }

  deleteRememberedEmail() {
    this.localStorageService.remove("remember");
  }

  checkRememberedUser() {
    let result = this.localStorageService.getItem("remember");
    if (result != null) {
      this.rememberedEmail = result;
    } else {
      this.rememberedEmail = undefined;
    }
  }

  saveEmail(email: string) {
    this.localStorageService.add("remember", email);
  }
}
