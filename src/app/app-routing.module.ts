import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LoginFormComponent } from './login-form/login-form.component'; 
import { AuthguardGuard } from './authguard.guard';
import { SubjectsDashboardComponent } from './subjects-dashboard/subjects-dashboard.component';

const routes: Routes = [
  
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:"Dashboard",component:DashboardPageComponent,canActivate:[AuthguardGuard],
   children:[
    {
      path:'subjects',
      component:SubjectsDashboardComponent
    }
   ]
},
  {path:"login",component :LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardGuard]
})
export class AppRoutingModule { }
