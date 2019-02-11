import { Component, Input } from '@angular/core';

@Component({
    selector: 'profile-age',
    template: `
        <p>Age: {{page}}</p>
    `
})
export class ProfileAgeComponent {
    @Input() page: number;
}