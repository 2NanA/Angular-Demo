import {Component,OnInit} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})


export class HomeComponent {
	hero:object;
	submitMessage:string;

	ngOnInit(){
		this.hero = {name:'shanks'};
		this.submitMessage = 'wrong ss';
	}
	// 这个constructor 居然解析不了 普通类型???? 真的6 找了半天 原来是这个原因
	// constructor (hero){}
	// constructor (hero:CommonService){}
}
