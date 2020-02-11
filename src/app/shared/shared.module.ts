import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Directive1Directive } from './directives/directive1.directive';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { LocalNumberPipe } from './pipes/local-number.pipe';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, Directive1Directive, LocalDatePipe, LocalNumberPipe],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    Directive1Directive,
    LocalDatePipe,
    LocalNumberPipe
  ],
})
export class SharedModule { }

// Should not import in app module. Common components/ services/ pipes across the entire application can 
// be placed here. Only feature modules can import this module.