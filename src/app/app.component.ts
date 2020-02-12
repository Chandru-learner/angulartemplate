import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';

import localeTamil from '@angular/common/locales/ta';
import localeTelugu from '@angular/common/locales/te';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngProjectTemplate';

  constructor(private router: Router,
    private translate: TranslateService) {
    this.translate.addLangs(['en', 'te', 'ta']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|te|ta/) ? browserLang : 'en');
  }

  ngOnInit() {
    registerLocaleData(localeTamil);
    registerLocaleData(localeTelugu);
  }

  login() {
    this.router.navigateByUrl('/login');
  }
}
