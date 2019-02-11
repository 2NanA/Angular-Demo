import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Jsonp, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
  constructor(private http: HttpClient,private jp: Jsonp) { }

  public getJsonx(path: string): any{
  	// return this.http.get(path);


  	// return this.http.get(path).map((res) => res.json());
  	// return this.http.get(path).map((res) => res);
  	return this.http.get(path); // 直接subscribe
  }

  public jsonpTets(url: string): any{
  	   // 重点来了，url地址后面添加?callback=JSONP_CALLBACK
    
        // 也可使用URLSearchParams()设置参数，这里只有一个参数，就写在url里面了。
        // 使用map().substribe()获取数据
      return this.jp.get(url).map(res=> res.json());
  }


}