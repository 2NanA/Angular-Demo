import { Type } from '@angular/core';

export class AdItem {
  constructor(public component: Type<any>, public data: any) {}
  // Type 相当于构造函数
  // ngOnInit(){
  // 	console.log(Type);
  // }
}
