// Modules
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";

import { AboutMeComponent } from "./routes/about-me.component";
import { BlogComponent } from "./routes/blog.component";
import { HobbiesComponent } from "./routes/hobbies.component";
import { ResumeComponent } from "./routes/resume.component";
import {ProjectsComponent} from "./routes/projects.component";

// Services

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    BlogComponent,
    HobbiesComponent,
    ResumeComponent,
    ProjectsComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
