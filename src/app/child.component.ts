import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
    selector: 'exe-child',

        //  <p [style]='heystyle | json'>style inject</p>
    template: `
        <p prefix='Yes EEEE '>I'm child of {{ textSfd }}</p>
        <p>image link in child component {{ heroImageUrl }}</p>
        <button (click)='changeTextProp()'>Modify</button>
        <img [src]='heroImageUrl'>
      
        <p>{{ heystyle | json }}</p>
  
        <hr>

        <form novalidate #f="ngForm">
            <input type='text' [ngModelOptions]='{standalone: true}' placeholder='flmt' ngModel>
            <input type='text' name='to' placeholder='del' ngModel>
        </form>
        <p>
            {{ f.value | json }}    
        </p>
        
    `
    // 打中括号 之后src属性是可以被注入的
    // 但是只能注入当前组件中定义的数据 
    // 或者 在别的组件中input 的数据 (input 变量必须作为属性 绑定)



      // <form novalidate #f="ngForm">
      //   <input type='text' name='yo' placeholder='flmt' ngModel>
      //   <input type='text' name='to' placeholder='del' ngModel>
      // </form>
      // <p>
      //   {{ f.value | json }}    
      // </p>
    // form 表单这样定义 是双向绑定 仅限表单 使用ngmodel 必须带有name属性
    // 如果设置standalone 则该元素不再属于表单

    // 非表单
    // 1 <input type='text' name='yo' ngModel> 无效
    // 2 <input type='text' name='yo' [ngModel]="yo"> 单向绑定 组件->模板
    // 3 <input type='text' name='yo' [(ngModel)]="yo"> 组件<->模板
      // <input type="text"  [(ngModel)]="yo">
      //   <p> {{ yo }}  </p>
})

// @Component({
//     selector: 'exe-child',
//     template: `
//      <p>I'm child of {{ textSfd }}</p>
//     `
// })

export class ChildComponent {
    // 这个元素是从父组件输入的
    @Input() textSfd: string;
    



    //@Input() heroImageUrl: string; // 无效

    // nameSfd: string = 'Semlinkerjj'; // 无效

    heroImageUrl: string = '#'; // 无效

    yo: string = 'gkgkg'; // 
    to: string = 'hlhlh'; // 



    heystyle:object = {color:'green'};
    // nameSfd: string = 'Semlinkerjj'; // 无效

    // 如果在组件内手动改变输入属性的值，ngOnChanges 钩子是不会触发的。具体示例如下：
    ngOnChanges(changes: {[propName: string]: SimpleChange} ) {
        console.dir(changes['textSfd']);    
        // console.log(SimpleChange);
    }

    changeTextProp() {
        this.textSfd = 'this is modified content';
    }
}