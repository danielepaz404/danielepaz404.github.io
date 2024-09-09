import { Component } from '@angular/core';
import { ContentContainer } from '../content-container/content-container.component';

@Component({
    selector: "app-description",
    standalone: true,
    imports: [ContentContainer],
    styleUrl: "description.component.css",
    template: `<app-content-container [content]="content" [title]="title"> </app-content-container>`
})
export class Description {
    protected title = "What do you mean by UX Engineer???";
    protected content = "With a background in Software Engineering and an eye for design, I'm passionate in helping the user get what they want. You could say I'm a dev who cares.";
}