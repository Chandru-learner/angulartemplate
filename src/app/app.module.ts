import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,    
    CoreModule,
    AuthModule,
    AdminModule,
    AppRoutingModule, //this must be called last
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
