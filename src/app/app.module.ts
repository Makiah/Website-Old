// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";

import { HomeComponent } from "./routes/home.component";
import { BlogComponent } from "./routes/blog.component";
import { ContactsComponent } from "./routes/contacts.component";
import { FeedbackComponent } from "./routes/feedback.component";
import { PortfolioComponent } from "./routes/portfolio.component";
import { ResumeComponent } from "./routes/resume.component";

// Services

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BlogComponent,
    ContactsComponent,
    FeedbackComponent,
    PortfolioComponent,
    ResumeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
