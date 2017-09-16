import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutMeComponent } from "./routes/about-me.component";
import { BlogComponent } from "./routes/blog.component";
import { HobbiesComponent } from "./routes/hobbies.component";
import { ResumeComponent } from "./routes/resume.component";
import {ProjectsComponent} from "./routes/projects.component";

const routes: Routes = [
  { path: "", redirectTo: "/about-me", pathMatch: "full" },
  { path: "about-me", component: AboutMeComponent },
  { path: "blog", component: BlogComponent },
  { path: "hobbies", component: HobbiesComponent },
  { path: "resume", component: ResumeComponent },
  { path: "projects", component: ProjectsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
