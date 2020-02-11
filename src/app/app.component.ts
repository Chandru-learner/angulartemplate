import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';



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
    this.router.navigateByUrl('/login');
  }
}
