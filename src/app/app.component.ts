import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from '../components/profile/profile.component';
import { Projects } from "../components/projects/projects.component";
import { Description } from '../components/description/description.component';
import { Skills } from '../components/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet, Profile, Projects, Description, Skills],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'danielepaz404.github.io';
}
