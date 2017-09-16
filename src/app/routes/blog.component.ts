import {Component} from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: "blog",
  template: `
    <div id="blogIntro">
      <h3 class="display-3 thinFont2">Blog</h3>
      <p>Random tips I've picked up during my travels through the interwebs.</p>
    </div>
    
    <div id="blogsContainer">
      <div class="blogCard" [@blogPostWideNarrow]="blogOpenStates[0]">
        <div class="blogHeading" (click)="toggleBlogPost(0)">
          <h1 class="thinFont2">Using OpenCV 3.3.0 as Robot Vision for FTC</h1>
        </div>
        
        <div class="blogContent" [@blogPostOpenClose]="blogOpenStates[0]">
          <p>Coming Soon!</p>
        </div>
      </div>
      
      <div class="blogCard" [@blogPostWideNarrow]="blogOpenStates[1]">
        <div class="blogHeading" (click)="toggleBlogPost(1)">
          <h1 class="thinFont2">Gravity Simulations in Unity</h1>
        </div>

        <div class="blogContent" [@blogPostOpenClose]="blogOpenStates[1]">
          <p>Coming Soon!</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    #blogIntro {
      background-color: #de9e00;
      padding: 15px;
    }

    #blogIntro * {
      color: white;
      text-align: center;
    }

    #blogsContainer {
      padding: 2%;
      overflow: hidden;
      background-color: #e9e9e9;
    }

    .blogCard {
      border: 1px solid grey;
      margin: 10px;
      width: calc(50% - 20px);
      float: left;
      box-shadow: 10px 10px grey;
      min-width: 500px;
      background-color: white;
    }

    .blogHeading {
      padding: 15px;
      text-align: center;
      color: black;
      cursor: default;
    }

    .blogHeading:hover {
      text-align: center;
      background-color: #e0e0e0;
      color: black;
    }

    .blogHeading:active {
      text-align: center;
      background-color: #b8b8b8;
      color: white;
    }

    .blogContent {
      padding: 20px;
    }
  `],
  animations: [
    trigger("blogPostOpenClose", [
      state("open", style({
        height: "100vh",
        overflow: "scroll"
      })),
      state("closed", style({
        height: "100px",
        overflow: "hidden"
      })),
      transition("open => closed", animate("400ms ease-in-out")),
      transition("closed => open", animate("400ms ease-in-out"))
    ]),
    trigger("blogPostWideNarrow", [
      state("open", style({
        width: "100%"
      })),
      state("closed", style({
        width: "calc(50% - 20px)"
      })),
      transition("open => closed", animate("400ms ease-in-out")),
      transition("closed => open", animate("400ms ease-in-out"))
    ])
  ]
})
export class BlogComponent {
  blogOpenStates: string[] = ["closed", "closed"];

  toggleBlogPost(blogNum: number) {
    this.blogOpenStates[blogNum] = this.blogOpenStates[blogNum] === "closed" ? "open" : "closed";
  }
}
