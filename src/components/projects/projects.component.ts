import { Component } from '@angular/core';
import { ContentContainer } from '../content-container/content-container.component';

@Component({
    selector: "app-projects",
    standalone: true,
    imports: [ContentContainer],
    styleUrl: "projects.component.css",
    template: `<app-content-container [content]="content" [title]="title"> </app-content-container>`
})
export class Projects {
    protected title = "Projects";
    protected content = "Cat ipsum dolor sit amet, let me in let me out let me in let me out let me in let me out who broke this door anyway . Cattt catt cattty cat being a cat sleep on my human's head or nap all day, hell is other people kitty scratches couch bad kitty yet hide at bottom of staircase to trip human for catch small lizards, bring them into house, then unable to find them on carpet. Take a deep sniff of sock then walk around with mouth half open this human feeds me, i should be a god for cat walks in keyboard lie on your belly and purr when you are asleep or jump five feet high and sideways when a shadow moves. ";
}