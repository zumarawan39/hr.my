import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeModule } from './welcome/welcome.module';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"",loadChildren:()=>import('./welcome/welcome.module').then((m)=>m.WelcomeModule)},
  {path:"welcome",loadChildren:()=>import('./welcome/welcome.module').then((m)=>m.WelcomeModule)},
  {path:"auth",loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},
  {path:"dashboard",loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule),canActivate:[AuthGuard]},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
