import { Component, ViewEncapsulation,OnInit  } from '@angular/core';
// import { AppState } from './app.service';

import { AdService } from './ad/ad.service';
import { AdItem } from './ad/ad-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

// @Component({
//     selector: 'app-root',
//     template: `
//      <p>{{ title }}</p>
//     `,
//     styleUrls: ['./app.component.css']
// })


export class AppComponent {
    title = 'app';
    message = 'Face';
    AppProfile: { name: string; age: number } = {
      name: 'CardEmp',
      age: 31
    };

    // ngOnInit() {
    //   setTimeout(() => {
    //     this.AppProfile.name = 'Ferrari';
    //     this.AppProfile.age = 56;
    //   }, 2500);
    // }

    /* 广告牌 模块 动态加载 */
    // 第一步调用 service 取出广告牌数据
    ads: AdItem[];

    constructor(private adService: AdService) {}

    ngOnInit() {
      this.ads = this.adService.getAds();
      console.log(this.ads);
    }
    /* *************** */


    /* input output 实例 */
    initialCount: number = 5;
    changeMsg: string;

    childCountChange(event: number) {
      this.changeMsg = `enventer change turn on current is: ${event}`;
    }

    showCheckedq(note:String){   
      console.log(note);     
    }
    // 子指令创建一个 EventEmitter 实例，并将其作为output属性导出。
    // 子指令调用已创建的 EventEmitter 实例中的 emit(payload) 方法来触发一个事件，
    // 父指令通过事件绑定 (eventName) 的方式监听该事件，
    // 并通过 $event 对象来获取 payload 对象
}
