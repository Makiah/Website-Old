import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./routes/home.component";
import { BlogComponent } from "./routes/blog.component";
import { ContactsComponent } from "./routes/contacts.component";
import { FeedbackComponent } from "./routes/feedback.component";
import { PortfolioComponent } from "./routes/portfolio.component";
import { ResumeComponent } from "./routes/resume.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "blog", component: BlogComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "feedback", component: FeedbackComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "resume", component: ResumeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
