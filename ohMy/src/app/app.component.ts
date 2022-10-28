import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ohMy';
  param = {value:"world"}

  constructor(public translate:TranslateService){
    this.translate.addLangs(['en', 'id']);
    this.translate.setDefaultLang('en');

    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|id/) ? browserLang : 'en');
  }

  setLanguage(lang: string) {
      this.translate.use(lang);
  }
}
