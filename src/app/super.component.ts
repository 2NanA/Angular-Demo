import { Component } from '@angular/core';




// @Component({
//   selector: '[app-super]',
//   templateUrl: './super.component.html',
//   // changeDetection: ChangeDetectionStrategy.OnPush
// })

// @Component({
//     selector: 'exe-parent',
//     template: `
//      <exe-child [textSfd]="nameSfd"></exe-child> 
//     `
// })




@Component({
    selector: 'exe-parent',
    templateUrl: './super.component.html',
  	styleUrls: ['./app.component.css']
})
export class SuperComponent {
	// 数据是从顶部 注入 到底层文件的
    nameSfd: string = 'Semlinker Parent';

   	yo: string = 'hey'; 
    to: string = 'checki';
    // heroImageUrl: string = 'www.test'; 

}