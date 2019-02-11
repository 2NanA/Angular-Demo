import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {CommonService} from './common.service';

@Component({
  selector: 'observable-sfd',
  templateUrl: './observ.component.html'
})
export class AsyncObservablePipeComponent {
	time: Observable<any>;
  foods: any;
  phpdata: any;
	// time = new Observable(this.os());
  // time = new Observable(observer =>
  //   setInterval( () => observer.next(new Date().toString()), 1500)
  // )
  constructor (public sevr:CommonService){}


	ngOnInit () {

    // console.log(this.time);

    // 返回的是一个订阅者 (Observer )
    // 通过订阅方法去获取数据


    // Observable 

    //订阅：Observer 通过 Observable 提供的 subscribe() 方法订阅 Observable。

    //发布：Observable 通过回调 next 方法向 Observer 发布事件。

    // map 方法 // 响应数据是JSON字符串格式的。 我们必须把这个字符串解析成JavaScript对象


    this.getFoods();
    this.getPhps();
      //   console.log(this.sevr.getJson('test.json')
      // .map(resp => resp.json().data)
      // .catch(this.handleError)
      // );
	}

    // .map((res:Response) => res.json())
      // .map(res => res)
  getFoods() {
    this.sevr.getJsonx('assets/test.json')
    .subscribe(
        data => { this.foods = data},
        err => {console.error(err); console.log("error")},
        () => console.log('done')
      );
  }

  getPhps() {
    // let phpUrl = 'http://test.local.com/testEcho.php?callback=JSONP_CALLBACK';
    let phpUrl = 'http://test.local.com/testEcho.php?name=fafafa&callback=JSONP_CALLBACK';
    this.sevr.jsonpTets(phpUrl)
            .subscribe((data) => { this.phpdata = data}
              , (error) => {
                console.error(error);
            });
  }

    // 定义私有方法来处理异常
  private handleError(error: any) {
    // 我们的服务处理器(handleError)把响应对象记录到控制台中
    // 把错误转换成对用户友好的消息，并且通过Observable.throw来
    // 把这个消息放进一个新的、用于表示“失败”的可观察对象
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // 输出异常信息
    return Observable.throw(errMsg);
  }


// 异步可观察对象(asynchronous observable)模式。



} 