import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin.routing.module';
import { DashboardComponent, AdminComponent, HomeworkComponent } from './pages';
import { SharedModule } from '../shared/shared.module';


// AoT requires an exported function for factories
//This is needed for internationalization
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [DashboardComponent, AdminComponent, HomeworkComponent],
  imports: [
    AdminRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
})
export class AdminModule { }