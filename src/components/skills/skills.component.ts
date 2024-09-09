import { Component } from '@angular/core';
import { ContentContainer } from '../content-container/content-container.component';

@Component({
    selector: "app-skills",
    standalone: true,
    imports: [ContentContainer],
    styleUrl: "skills.component.css",
    template: `<app-content-container [content]="content" [title]="title"> </app-content-container>`
})
export class Skills {
    protected title = "Skills";
    protected content = "Angular, HTML, CSS, Typescript, Figma, SFDC, DBs";
}