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
  selector: "resume",
  template: `
    <div id="resumeDescription">
      <h3 class="display-3 thinFont2">Resume</h3>
      <p>My resume details my academic proficiencies and the educational institutions which I've attended, in timeline format.</p>
    </div>
    
    <div id="wrapper">
      <div class="timelineItemContainer" *ngFor="let timelineItem of timelineItems">
        <div class="timelineContinuation">
          <div></div>
          <img [src]="timelineItem.icon">
          <div></div>
        </div>
        <div class="timelineContent">
          <div class="contentImage" [style.background-image]="'url(' + timelineItem.image + ')'"></div>
          <div class="contentDescription">
            <div>
              <h1 class="thinFont2">{{timelineItem.title}}</h1>
              <p class="thinFont1">{{timelineItem.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    #resumeDescription {
      background-color: #db474e;
      padding: 15px;
    }

    #resumeDescription * {
      color: white;
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
export class ResumeComponent {
  timelineItems: TimelineItem[] = [
    new TimelineItem("/assets/student-icon.png", "/assets/natick-high.jpg", "Natick High School",
      "I've thoroughly enjoyed my time at Natick High, especially the extensive course selection and the bustling extracurricular environment.  I hope to employ the skills and knowledge I've obtained during my high school career, combined with that which I'll obtain in college, in a profession which will be both interesting and rewarding.  "),
    new TimelineItem("/assets/references-icon.png", "/assets/student-center.jpg", "MIT PRIMES",
      "Despite being technically an extracurricular activity, I've learned invaluable skills during my time in the MIT PRIMES program: writing academic papers, working with genomic researchers, even developing tools to aid oncologists in their fight against cancer.  Few programs could rival PRIMES in its utility to students, along with the real world.")
  ];
}
