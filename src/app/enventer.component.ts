import { Component,ViewEncapsulation,EventEmitter,OnInit,Output,Input } from '@angular/core';

@Component({
  selector: 'event-test',
  templateUrl: './enventer.component.html',
  outputs: [
    'change:countChange'
    // 'sfdClick',
    // 'click'
  ] // 声明之后 component 中不用再加装饰符 inputs 同理  但是不建议这样的写法
})

export class EnventerComponent {
  // sizeNum : number = 2;
  

  @Input() count: number = 0;
  // @Output() change: EventEmitter<number> = new EventEmitter<number>();

  // 用来指定 绑定方法 的事件 在元素中的名称，指定之后 change 就成了component中的一个别名 

  change: EventEmitter<number> = new EventEmitter<number>();
  
  increment() {
    this.count++;
    // console.log(this.change);
    this.change.emit(this.count);
    // this.change.emit(30);
  }
  decrement() {
    this.count--;
    // console.log(this.change);
    this.change.emit(this.count);
  }
  





  public info(event:any){
    console.log(event);
  }




  // sfdClick = new EventEmitter();  
  // quickClick(event: Event, button: string) {
  //   // event.stopPropagation();
  //   // this.sfdClick.emit(button + " HOly");  
  //   console.log("faver");
  //   // this.sfdClick.next(button);
  // }






  @Output() checkedq = new EventEmitter(); 
  note:string = 'EventEmitter test';
  // click = new EventEmitter();
  quiClick(button: string) {
    // this.checkedq.next("next:"+this.note); //过时 
    this.checkedq.emit("emit:"+this.note); 
    // console.log(button);
    // console.log(this.click);
    // console.log(this.click);
    // console.log(this.sfdClick);
    // this.click.emit(button + " HOly");  

  }

  // ngOnInit (){
  //   this.sfdClick.subscribe((name: string) => console.log(`Hello ${name}`)); // 订阅操作
  //   this.sfdClick.emit("Nate");  // 发射至控制台
  // }
}