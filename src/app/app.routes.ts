import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';

import { AsyncObservablePipeComponent } from './observ.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'observ', component: AsyncObservablePipeComponent },


  { path: 'github', component: RepoBrowserComponent,
   // 第一步 搜索界面 github  http://localhost:4200/#/github

    children: [

      { path: '', component: RepoListComponent }, 
      // 第二步 搜索org 有参数或者没参数  http://localhost:4200/#/github
      // http://localhost:4200/#/github/php  
      { path: ':orgl', component: RepoListComponent, //github/angular
      


        children: [
          // 第三步 无参数 和 第二步有参数 是一样的情况
          // http://localhost:4200/#/github/php 


          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }


        ]
      }


    ]

  },

  { path: 'contact', component: ContactComponent }
];

