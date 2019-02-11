import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {JsonpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';

/* config */
import { rootRouterConfig } from './app.routes';

/* logic */
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AsyncObservablePipeComponent } from './observ.component';
import { HeroJobAdComponent }   from './ad/ad-job.component';
import { AdBannerComponent }    from './ad/ad-banner.component';
import { HeroProfileComponent } from './ad/ad-profile.component';

/* service */
import { GithubService } from './github/shared/github.service';
import { CommonService } from './common.service';
import { AdService } from './ad/ad.service';

/* directive */
import { AdDirective } from './directives/ad.directive';

// import { SuperComponent } from './super.component';
// import { ChildComponent } from './child.component';
// import { GoldComponent } from './gold.component';
import { EnventerComponent } from './enventer.component'; // input output 示例
// import { ProfileNameComponent } from './profile-name.component';
// import { ProfileAgeComponent } from './profile-age.component';
// import { ProfileCardComponent } from './profile-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent,
    AsyncObservablePipeComponent,
    HeroJobAdComponent,
    AdBannerComponent,
    HeroProfileComponent,
    AdDirective,
    // SuperComponent,
    // ChildComponent,
    // GoldComponent,
    // ProfileNameComponent,
    // ProfileAgeComponent,
    // ProfileCardComponent,
    EnventerComponent,
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService,
    CommonService,
    AdService, 
  ],
  entryComponents: [ 
    HeroJobAdComponent, 
    HeroProfileComponent 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
