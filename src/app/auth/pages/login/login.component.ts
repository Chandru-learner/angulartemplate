import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  async navToAdmin() {
    const loggedIn: boolean = await this.authService.login();
    if (loggedIn && this.authService.isAdmin())
      this.router.navigateByUrl('/admin/dashboard');
  }

}
