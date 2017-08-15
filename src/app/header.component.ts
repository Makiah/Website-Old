import {AfterViewInit, Component, Input, ViewChild} from "@angular/core";
import { Router } from "@angular/router";
import { trigger, state, style, animate, transition } from "@angular/animations";


@Component({
  selector: "header",
  template: `
    <div id="headingContainer">
      <img id="profilePicture" src="/assets/profile-picture.png">
      <div id="profileInfo">
        <div class="row">
          <div id="nameContainer" class="primary">
            <p class="thinFont1">Makiah Bennett</p>
          </div>
          <div id="downloadCV" class="secondary clickable">
            <img src="/assets/cloud-download.png">
          </div>
        </div>
        
        <div class="row">
          <div id="purposes" class="primary">
            <div>
              <p class="thinFont1" id="developingTitle">Developing</p>
              <div id="purposesAnimation" [@slideInOut]="slideControl">
                <p #PurposeItem class="thinFont1">{{availablePurposes[currentPurposeIndex]}}</p>
              </div>
            </div>
          </div>
          <div id="viewGithub" class="secondary clickable" (click)="toGithub()">
            <img src="/assets/github-icon.png">
          </div>
        </div>

        <div class="row">
          <div id="home" class="shortcut clickable" (click)="redirectTo('home')">
            <img src="/assets/home-icon.png">
            <p class="thinFont1">Home</p>
          </div>
          <div id="resume" class="shortcut clickable" (click)="redirectTo('resume')">
            <img src="/assets/student-icon.png">
            <p class="thinFont1">Resume</p>
          </div>
          <div id="portfolio" class="shortcut clickable" (click)="redirectTo('portfolio')">
            <img src="/assets/resume-icon.png">
            <p class="thinFont1">Portfolio</p>
          </div>
          <div id="contacts" class="shortcut clickable" (click)="redirectTo('contacts')">
            <img src="/assets/references-icon.png">
            <p class="thinFont1">Contacts</p>
          </div>
          <div id="feedback" class="shortcut clickable" (click)="redirectTo('feedback')">
            <img src="/assets/feedback-icon.png">
            <p class="thinFont1">Feedback</p>
          </div>
          <div id="blog" class="shortcut clickable" (click)="redirectTo('blog')">
            <img src="/assets/pencil-icon.png">
            <p class="thinFont1">Blog</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .clickable {
      opacity: 1;
    }

    .clickable:hover {
      opacity: 0.8;
    }

    .clickable:active {
      opacity: 0.6;
    }

    p {
      margin: 0;
    }

    #headingContainer {
      height: 360px;
    }

    #headingContainer > * {
      float: left;
    }

    #profilePicture {
      height: 100%;
      width: 360px;
    }

    #profileInfo {
      height: 360px;
      width: calc(100% - 360px);
      padding: 0;
    }

    .row {
      width: 100%;
      height: 120px;
      float: left;
    }

    .row > * {
      height: 100%;
      float: left;
    }

    .primary {
      width: calc(100% - 120px);
      background-color: red;
    }

    .secondary {
      width: 120px;
    }

    #nameContainer {
      background-color: #4f4f4f;
    }

    #nameContainer p {
      color: #e4e4e4;

      font-size: 41px; /* Font actually 70px tall with this */
      padding: 0;
      margin: 35px 30px;
    }

    #downloadCV {
      background-color: #474747;
    }

    #downloadCV img {
      margin: 35px;
      height: 50px;
      width: 50px;
    }

    #purposes {
      background-color: #3f3f3f;
      padding-left: 35px;
      width: calc(100% - 155px);
    }

    #purposes * {
      float: left;
    }

    #purposes p {
      color: #e4e4e4;
      font-size: 25px; /* Font actually 70px tall with this */
    }

    #purposes > div {
      margin: 45px 0;
      height: 35px;
    }
    
    #developingTitle {
      margin-right: 8px;
    }
    
    #purposesAnimation {
      border-right: 5px solid #e4e4e4;
      overflow: hidden;
      white-space: nowrap;
    }

    #viewGithub {
      background-color: #3b3b3b;
    }

    #viewGithub img {
      margin: 35px;
      height: 50px;
      width: 50px;
    }

    .shortcut {
      width: calc(100% / 6);
      color: white;
      text-align: center;
    }

    .shortcut img {
      height: 50px;
      width: 50px;
      margin-top: 22px;
    }

    #home {
      background-color: #1abc9c;
    }

    #resume {
      background-color: #3498db;
    }

    #portfolio {
      background-color: #9b59b6;
    }

    #contacts {
      background-color: #e67e22;
    }

    #feedback {
      background-color: #e74c3c;
    }

    #blog {
      background-color: #d9a81d;
    }
  `],
  animations: [
    trigger("slideInOut", [
      state("in", style({
        width: "200px"
      })),
      state("out", style({
        width: "0px"
      })),
      transition("in => out", animate("400ms ease-in-out")),
      transition("out => in", animate("400ms ease-in-out"))
    ])
  ]
})
export class HeaderComponent {
  constructor (private router: Router) {
    this.toggleSlideControl();
  }

  slideControl: string = "out";
  availablePurposes: string[] = [
    "Python Utilities",
    "Bash Automation",
    "Unity3D Games",
    "Angular Pages",
    "BotW Extractors",
    "Java Solutions",
    "FTC Robot Code",
    "Good Grades"
  ];
  currentPurposeIndex: number = 0;
  toggleSlideControl = (): void => {
    if (this.slideControl === "in") {
      this.slideControl = "out";
      setTimeout(() => this.toggleSlideControl(), 500);
    } else {
      this.currentPurposeIndex++;
      if (this.currentPurposeIndex === this.availablePurposes.length) {
        this.currentPurposeIndex = 0;
      }
      this.slideControl = "in";
      setTimeout(() => this.toggleSlideControl(), 1800);
    }
  }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

  toGithub(): void {
    window.location.href = "https://github.com/Makiah";
  }
}
