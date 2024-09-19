import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { MainComponent } from './components/main/main.component';
import { SigninComponent } from '../auth/components/signin/signin.component';
import { SignupComponent } from '../auth/components/signup/signup.component';

const routes: Routes = [{
  path:"",component:WelcomeComponent,children:[
    {path:"",component:MainComponent },
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
