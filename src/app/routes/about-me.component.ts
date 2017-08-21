import {Component} from "@angular/core";

import {Router} from "@angular/router";

@Component({
  selector: "about-me",
  template: `    
    <div id="wrapper">
      <div id="paragraph" class="personal">
        <h1 class="thinFont1" style="font-size: 80px; text-align: center;">Hi!</h1>
        <p class="thinFont1" style="font-size: 20px;">My name's Makiah Bennett.  I'm a 17 year old high school senior from Natick, MA, and an aspiring software engineer.  This website, among many other projects, is a side project of mine that arose from my curiosity about the latest and greatest development tools, many of which are accessible from my GitHub Profile.</p>
      </div>
  
      <div id="info" class="personal">
        <h4 class="thinFont1" style="font-size: 30px;">Personal Info</h4>
        <table class="table table-bordered">
          <tr>
            <td>School</td>
            <td>Natick High, Natick, MA</td>
          </tr>
          <tr>
            <td>Favorite Book Series</td>
            <td>The Heroes of Olympus</td>
          </tr>
          <tr>
            <td>Favorite TV Show</td>
            <td>Archer</td>
          </tr>
          <tr>
            <td>Favored Career Paths</td>
            <td>Computer Science, Biotechnology</td>
          </tr>
        </table>
      </div>
    </div>
  `,
  styles: [`
    /* Floating fix (otherwise vertical space is 0). */
    #wrapper {
      overflow: hidden;
    }
    
    .personal {
      padding: 20px;
      float: left;
    }
    
    #paragraph {
      width: 60%;
      background-color: #4085bc;
    }
    
    #paragraph * {
      color: white;
    }
    
    #info {
      width: calc(40% - 10px);
    }
  `]
})
export class AboutMeComponent {
  constructor (private router: Router) {}

  openRoute(route: string) {
    this.router.navigate(["/" + route]);
  }
}
