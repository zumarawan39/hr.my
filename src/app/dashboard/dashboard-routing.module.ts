import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainModule } from './main/main.module';
import { HomeComponent } from './main/components/home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"",component:DashboardComponent,children:[
    { 
      path: '', 
      loadChildren: () => import('./main/main.module').then(m => m.MainModule) 
    },
    { 
      path: 'main', 
      loadChildren: () => import('./main/main.module').then(m => m.MainModule) 
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
