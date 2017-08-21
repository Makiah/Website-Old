import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <header></header>
    <router-outlet></router-outlet>
    <footer></footer>
  `
})
export class AppComponent {
  title = "Makiah's Website";
}
