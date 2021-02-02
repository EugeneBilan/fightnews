import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: 'home',
        component: MainpageComponent
      }

    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
