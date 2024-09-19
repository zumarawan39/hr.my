import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsidebarComponent } from './components/asidebar/asidebar.component';
import { DashboardComponent } from './dashboard.component';
// import { HomeComponent } from './components/home/home.component';
import { RightsidebarComponent } from './components/rightsidebar/rightsidebar.component';
import { MainModule } from './main/main.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AsidebarComponent,
    RightsidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MainModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
