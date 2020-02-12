import { NgModule } from '@angular/core';
import { LoginComponent } from './pages';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule
  ],
  providers: []
})
export class AuthModule { }