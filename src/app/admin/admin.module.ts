import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing.module';
import { DashboardComponent, AdminComponent, HomeworkComponent } from './pages';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, AdminComponent, HomeworkComponent],
  imports: [
    AdminRoutingModule,
    SharedModule
  ],
  providers: [],
})
export class AdminModule { }