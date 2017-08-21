import {Component} from "@angular/core";

@Component({
  selector: "blog",
  template: `
    <div id="blogIntro">
      <h3 class="display-3 thinFont2">Blog</h3>
      <p>Random tips I've picked up during my travels through the interwebs.</p>
    </div>
    
    <br>
    <div id="blogEntries">
      <p><i>No entries available to display :(</i></p>
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
  `]
})
export class BlogComponent {

}
