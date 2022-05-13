import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserForLogin } from 'src/app/models/userForLogin';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: Observable<boolean>;
  currentUser: UserForLogin;
  constructor( 
    private authService: AuthService,
) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.loginStatus;
    this.isLoggedIn.subscribe(() => {  
      this.currentUser = this.authService.getUser()!;
    })
  }
}
