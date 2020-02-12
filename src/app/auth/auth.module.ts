import { NgModule } from '@angular/core';
import { LoginComponent } from './pages';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../core/services/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }