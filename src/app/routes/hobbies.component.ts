import {Component} from "@angular/core";

class TimelineItem {
  constructor(_icon: string, _image: string, _title: string, _description: string) {
    this.icon = _icon;
    this.image = _image;
    this.title = _title;
    this.description = _description;
  }

  icon: string;
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: "hobbies",
  template: `
    <div id="hobbiesIntro">
      <h3 class="display-3 thinFont2">Clubs and Hobbies</h3>
      <p>What's life without a bit of fun?</p>
    </div>

    <div id="wrapper">
      <div class="timelineItemContainer" *ngFor="let timelineItem of timelineItems">
        <div class="timelineContent">
          <div class="contentDescription">
            <div>
              <h1 class="thinFont2">{{timelineItem.title}}</h1>
              <p class="thinFont1">{{timelineItem.description}}</p>
            </div>
          </div>
          <div class="contentImage" [style.background-image]="'url(' + timelineItem.image + ')'"></div>
        </div>

        <div class="timelineContinuation">
          <div></div>
          <img [src]="timelineItem.icon">
          <div></div>
        </div>
      </div>
    </div>
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
    
    #wrapper {
      overflow: hidden;
      padding: 20px;
    }

    .timelineItemContainer {
      height: 300px;
      opacity: 1;
      background-color: white;
    }

    .timelineItemContainer:hover {
      height: 300px;
      opacity: 0.9;
      background-color: #e8faff;
      border-radius: 5px;
    }

    .timelineItemContainer > * {
      float: left;
    }

    .timelineContinuation {
      width: 60px;
      height: 100%;
    }

    .timelineContinuation img {
      height: 60px;
      width: 60px;
      background-color: #9a9a9a;
      border-radius: 10px;
      padding: 7px;
    }

    .timelineContinuation div {
      height: calc(50% - 60px / 2);
      width: 2px;
      background-color: #bbbbbb;
      margin: 0 29px;
    }

    .timelineContent {
      margin: 10px;
      height: 280px;
      width: calc(100% - 80px);
      overflow: hidden;
    }

    .timelineContent * {
      float: left;
    }

    .timelineContent > .contentImage {
      width: 60%;
      height: 100%;
      
      background-position: center;
      background-size: 100% auto;
      background-repeat: no-repeat;
    }

    .timelineContent > .contentDescription {
      display: flex;
      align-items: center;
      
      width: 40%;
      margin: 0;
      height: 100%;
      padding: 10px;
    }

    .timelineContent > div > h1 {
      width: 100%;
    }
  `]
})
export class HobbiesComponent {
  timelineItems: TimelineItem[] = [
    new TimelineItem(
      "/assets/robot-icon.png", "/assets/robotics-states.jpg",
      "Robotics",
      "Robotics has been an incredibly rewarding part of my high school experience, in which I've participated for each of my four years as a programmer.  After a mediocre run to States during my freshman year, we've since made it for each successive year a bit further than the year prior: Super Regionals during sophomore year, and Worlds during junior year.  Festival of Champions this year?  Who knows? :)"
    ),
    new TimelineItem(
      "/assets/chemistry-icon.png", "/assets/science-bowl.jpg",
      "Science Bowl",
      "Pretty much Jeopardy for exclusively science trivia, Science Bowl is a super fun activity also run out of the high school which pits high school against high school to solve tricky problems (which can range from simple recall of biological systems to multi-step mathematics).  "
    ),
    new TimelineItem(
      "/assets/game-design-icon.png", "/assets/unity-design.png",
      "Game Design",
      "I've been using Unity3D since middle school, and the tool just keeps getting better.  Since that point, I've made a number of games, each of which I had ambitious plans for, up until a bigger and better project came up and I chose to work on that instead (this happened many times over :P).  Thankfully, GitHub and BitBucket allow me to store these projects if I choose to work on them later!"
    ),
    new TimelineItem(
      "/assets/design-icon.png", "/assets/smart-co-screenshot.png",
      "Angular2 Web Development",
      "Starting with the SMART-CO project (available at https://smart-co.github.io), I've grown to really enjoy working with Google's web development library: Angular 2.  With it, I've developed this site and my robotics team's website, among other things."
    )
  ];
}
