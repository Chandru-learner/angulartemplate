import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/core/services/session.service';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private session: SessionService,
    private translate: TranslateService) { }

  ngOnInit() {
  }

  changeLang(lang) {
    console.log(lang);
    this.session.registerCulture(lang);
    this.translate.use(lang);
  }
}
