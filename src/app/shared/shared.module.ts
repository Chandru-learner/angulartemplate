import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

// Should not import in app module. Common components/ services/ pipes across the entire application can 
// be placed here. Only feature modules can import this module.