import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div id="wrapper">
      <header></header>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`   
    #wrapper {
    }
  `]
})
export class AppComponent {
  title = "Makiah's Website";
}
