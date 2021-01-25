import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    // children: [
    //   {
    //     path: 'home',
    //     component: MainpageComponent
    //   }

    // ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomepageRoutingModule { }
