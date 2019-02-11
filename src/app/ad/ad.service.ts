import { Injectable }           from '@angular/core';

import { HeroJobAdComponent }   from './ad-job.component';
import { HeroProfileComponent } from './ad-profile.component';
import { AdItem }               from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    // 添加两种类型的广告牌
    return [
      new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),
      new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),


      new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),
      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  } 
}
