import { Component } from '@angular/core';
import { ContentContainer } from '../content-container/content-container.component';

@Component({
    selector: "app-profile",
    standalone: true,
    imports: [ContentContainer],
    styleUrl: "profile.component.css",
    template: `<app-content-container [content]="content" [photoUrl]="photoUrl" [title]="title" [subtitle]="subtitle"> </app-content-container>`
})
export class Profile {
    protected content = "Bridging functionality and form to create seamless experiences";
    protected photoUrl = "../../../../profile_pic.jpg";
    protected title = "Daniele Paz";
    protected subtitle = "UX Engineer";
}