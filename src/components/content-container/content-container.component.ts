import { Component, Input } from "@angular/core";

@Component({
    selector: "app-content-container",
    standalone: true,
    templateUrl: "content-container.component.html",
    styleUrl: "./content-container.component.css"
})
export class ContentContainer {
    @Input() photoUrl?: string;
    @Input() title?: string;
    @Input() subtitle?: string;
    @Input() content!: string;
}