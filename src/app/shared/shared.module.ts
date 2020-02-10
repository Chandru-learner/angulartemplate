import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Directive1Directive } from './directives/directive1.directive';
import { Pipe1Pipe } from './pipes/pipe1.pipe';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, Directive1Directive, Pipe1Pipe],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    Directive1Directive,
    Pipe1Pipe
  ]
})
export class SharedModule { }

// Should not import in app module. Common components/ services/ pipes across the entire application can 
// be placed here. Only feature modules can import this module.