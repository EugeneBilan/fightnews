import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainpageComponent} from './components/mainpage/mainpage.component';

import { HomepageRoutingModule} from './homepage-routing.module';


@NgModule({
  declarations: [
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    MainpageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomeModule { }
