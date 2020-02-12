import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent, AdminComponent, HomeworkComponent } from './pages';
import { LoginGuard } from '../core/guards/login-guard';
import { AuthService } from '../core/services/auth.service';
import { AdminGuard } from '../core/guards/admin-guard';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [LoginGuard, AdminGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'homework', component: HomeworkComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    LoginGuard,
    AdminGuard
  ]
})
export class AdminRoutingModule { }