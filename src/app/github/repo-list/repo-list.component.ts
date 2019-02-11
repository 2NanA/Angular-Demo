import {Component, OnInit} from '@angular/core';
import {GithubService} from '../shared/github.service';

import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'repo-list',
  styleUrls: ['./repo-list.component.css'],
  templateUrl: './repo-list.component.html',
})
export class RepoListComponent implements OnInit {
  org: string;
  repos: Observable<any>;

  constructor(public github: GithubService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    // console.log(this.route.queryParams);
    // console.log(this.route.params);
    // param 取的是route 中绑定的变量 而不是url中的参数

    // 只会运行一次  初始化angular 的 repos

    this.route.params.subscribe(params => {
      this.org = params['orgl'];
      // console.log("ffff");
      // console.log(this.org); // angular
      if (this.org) {
        this.repos = this.github.getReposForOrg(this.org);
        // console.log(this.repos);  // 第二步 带参数搜索repos
      }
    });
  }
}
