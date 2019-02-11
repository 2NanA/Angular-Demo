import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  constructor(private http: Http) {}

  // 第一步的时候 点击search org按钮的时候调用的方法  会直接走第二步无参
  getOrg(orgl: string) {
    return this.makeRequest(`orgs/${orgl}`);
  }

  // 第二步 搜索 的时候调用的方法
  getReposForOrg(orgl: string) {
    return this.makeRequest(`orgs/${orgl}/repos`);
  }

  getRepoForOrg(orgl: string, repo: string) {
    return this.makeRequest(`repos/${orgl}/${repo}`);
  }





  private makeRequest(path: string) {
    let params = new URLSearchParams();
    params.set('per_page', '8');

    // console.log(params);
    // console.log(path);

    // orgs/angular/repos 第二步的参数
    // orgs/angular 第一步search的参数

    let url = `https://api.github.com/${ path }`;

    // console.log("ffffaa");
    // console.log(url);
    // console.log(this.http.get(url, {search: params}));
    


    return this.http.get(url, {search: params})
      // .map((res) => {console.log(res);} );
      .map(res => res.json());
  }
}
