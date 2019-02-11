import { Component, Input } from '@angular/core';


@Component({
    selector: 'profile-name',
    template: `
        <p>Name: {{pname}}</p>

    `
})
export class ProfileNameComponent {
   @Input() pname: string;
}