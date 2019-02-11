import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../shared/github.service';

@Component({
  selector: 'repo-browser',
  templateUrl: './repo-browser.component.html',
  styleUrls: ['./repo-browser.component.css']
})
export class RepoBrowserComponent {

  // 用来搜索orgs 的 component
  // 点击搜索之后会触发一次ajax 并navigate到第二步


  constructor(private router: Router, private github: GithubService) {
  }

  // ngOnInit (): void {
  //   // console.log(this.router);
  //   // console.log(this.github);
  // }

  searchForOrg(orgName: string) {
    
    // console.log('3123123ggg');
    // console.log(this.github.getOrg(orgName));

    // 输入选择org => 取得org对应的数据  => 页面根据url渲染
    this.github.getOrg(orgName)
      .subscribe( ({name}) => {

        // console.log({name}); // 这个name 是输入的org
        this.router.navigate(['/github', orgName]);
        // 相当于走到第二步  无参数

    });


  }

}
