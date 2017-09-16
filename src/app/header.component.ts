import { AfterViewInit, Component, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { trigger, state, style, animate, transition } from "@angular/animations";


@Component({
  selector: "header",
  template: `
    <div id="headingContainer">
      <img id="profilePicture" src="/assets/profile-picture.png">
      <div id="profileInfo">
        <div class="row">
          <div style="background-color: #4f4f4f" class="primary">
            <p id="myName" class="thinFont1">Makiah Bennett</p>
          </div>
          <div class="secondary clickable" style="background-color: #474747">
            <img id="cvDownloadIcon" src="/assets/cloud-download.png">
          </div>
        </div>

        <div class="row">
          <div id="purposes" class="primary" style="background-color: #3f3f3f;">
            <div>
              <p class="thinFont1" id="developingTitle">Developing</p>
              <div id="purposesAnimation" [@slideInOut]="slideControl">
                <p class="thinFont1">{{availablePurposes[currentPurposeIndex]}}</p>
              </div>
            </div>
          </div>
          <div style="background-color: #3b3b3b" class="secondary clickable" (click)="toGithub()">
            <img id="githubIcon" src="/assets/github-icon.png">
          </div>
        </div>

        <div class="row">
          <div class="shortcut clickable" (click)="redirectTo('about-me')" style="background-color: #4085bc">
            <img src="/assets/home-icon.png">
            <p class="thinFont1">About Me</p>
          </div>
          <div class="shortcut clickable" (click)="redirectTo('resume')" style="background-color: #db474e">
            <img src="/assets/student-icon.png">
            <p class="thinFont1">Resume</p>
          </div>
          <div class="shortcut clickable" (click)="redirectTo('hobbies')" style="background-color: #57ba4a">
            <img src="/assets/resume-icon.png">
            <p class="thinFont1">Clubs/Hobbies</p>
          </div>
          <div class="shortcut clickable" (click)="redirectTo('blog')" style="background-color: #de9e00">
            <img src="/assets/pencil-icon.png">
            <p class="thinFont1">Blog</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    div {
      margin: 0;
    }
    
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
    }

    .secondary {
      width: 120px;
    }

    #myName {
      color: #e4e4e4;

      font-size: 41px;
      padding: 0;
      margin: 35px 30px;
    }

    #cvDownloadIcon{
      margin: 35px;
      height: 50px;
      width: 50px;
    }

    #purposes {
      padding-left: 35px;
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

    #githubIcon {
      margin: 35px;
      height: 50px;
      width: 50px;
    }

    .shortcut {
      width: calc(100% / 4);
      color: white;
      text-align: center;
    }

    .shortcut img {
      height: 50px;
      width: 50px;
      margin-top: 22px;
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
