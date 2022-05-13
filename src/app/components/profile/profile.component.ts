import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserForLogin } from 'src/app/models/userForLogin';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';
import { ConfirmedValidator } from 'src/app/validators/confirmed.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoggedIn: Observable<boolean>;
  currentUser: UserForLogin;
  constructor( 
    private authService: AuthService,
) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.loginStatus;
    this.isLoggedIn.subscribe(() => {  //if logged in
      this.currentUser = this.authService.getUser()!;
    })
  }
  
}
