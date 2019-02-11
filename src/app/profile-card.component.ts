import { Component, Input ,
		OnInit,
        OnChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'profile-card',
    template: `
        <div>
          <profile-name [pname]='cardprofile.name'></profile-name>
          <profile-age [page]='cardprofile.age'></profile-age>
        </div>
        <p>test</p>
		<span *ngFor="let item of hooks" >{{item}},,, </span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush // 侦查策略
    // changeDetection: ChangeDetectionStrategy.Default
})
export class ProfileCardComponent {
	// 这个输入 实在appcomponent 完成的
    @Input() cardprofile: { name: string; age: number };

    public hooks: Array<string> = [];

    ngOnInit() {
        // console.dir(ChangeDetectionStrategy); 
        this.hooks.push('ngOnInit');
        //OnPush  Default   
        // console.log('ngOnInit');
    }

    ngOnChanges () {
	    this.hooks.push('ngOnChanges');
        // console.log('ngOnChanges');
	}

	ngDoCheck () {
	    this.hooks.push('ngDoCheck');
	}

	ngAfterContentInit () {
	    this.hooks.push('ngAfterContentInit');
	}

	ngAfterContentChecked () {
	    this.hooks.push('ngAfterContentChecked');
	}

	ngAfterViewInit () {
	    this.hooks.push('ngAfterViewInit');
	}

	ngAfterViewChecked () {
	    this.hooks.push('ngAfterViewChecked');
	}
    
    // 无论Default还是OnPush，生命周期钩子都会全部执行

	// 在Default下，state(在例子里就是那个hooks数组)被认为可变的，
	// 于是ngAfterViewInit和ngAfterViewChecked钩子执行后，会触发ngDoCheck，
	// 继而重新渲染视图；所以可以看到在ngAfterViewChecked之后，
	// 还有一次ngDoCheck和ngAfterContentChecked

	// 在OnPush下,state被认为是immutable的，于是在初始化结束后不会继续去检测hooks的变化，
	// 在ngAfterViewChecked后完成视图渲染，再之后的ngAfterViewInit和ngAfterViewChecked虽然执行了，
	// 但由于hooks的变化没有被检测，所以不会被渲染到视图上
    
    // ngAfterViewChecked ngDoCheck ngAfterContentChecked 这三个后执行
}