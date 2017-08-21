import {Component} from "@angular/core";

@Component({
  selector: "hobbies",
  template: `
    <div id="hobbiesIntro">
      <h3 class="display-3 thinFont2">Clubs and Hobbies</h3>
      <p>What's life without a bit of fun?</p>
    </div>
    
    <br>
    <p class="thinFont2"><i>Coming soon! :)</i></p>
  `,
  styles: [`
    #hobbiesIntro {
      background-color: #57ba4a;
      overflow: hidden;
      padding: 15px;
    }
    
    #hobbiesIntro * {
      color: white;
      float: left;
      width: 100%;
      text-align: center;
    }
  `]
})
export class HobbiesComponent {
}
