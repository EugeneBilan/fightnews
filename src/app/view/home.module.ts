import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomepageComponent } from './homepage.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainpageComponent} from './components/mainpage/mainpage.component';

import { HomepageRoutingModule} from './homepage-routing.module';
import { SubheaderComponent } from './shared/components/subheader/subheader.component';


@NgModule({
  declarations: [
    FooterComponent,
    HomepageComponent,
    HeaderComponent,
    MainpageComponent,
    SubheaderComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomeModule { }
