import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    
  ]
})
export class WelcomeModule { }
