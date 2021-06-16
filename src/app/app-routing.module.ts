import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoleGuard } from './role.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'admindashboard', component: AdminDashboardComponent, canActivate:[AuthGuard, RoleGuard]},
  { path:'home', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},
  { path:'', redirectTo:'home', pathMatch:'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
