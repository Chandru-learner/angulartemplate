import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService, 
    public authService: AuthService,
    private routes: Router) { }

  ngOnInit() {
  }

  changeLang(lang) {
    console.log(lang);
    this.translate.use(lang);
  }

  login() {
    this.routes.navigateByUrl('/login');

  }

  logout() {
    this.authService.logout();
    this.routes.navigateByUrl('');
  }
}
