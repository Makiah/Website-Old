import {AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, ViewChild} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: "projects",
  template: `
    <div id="projectsIntro">
      <h3 class="display-3 thinFont2">Projects</h3>
      <p>Cool stuff I'm in the process of developing!</p>
    </div>

    <div id="projectsParallax" class="parallax">
      <!-- Relic Recovery FTC -->
      <div id="relicrecovery" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
          <div class="centeredContent">
            <div class="orangePanel clickablePanel" (click)="redirectTo('https://github.com/RoboNatick3737/2017-18')">
              <h1 class="thinFont1 panelHeading" style="font-size: 100px;">FTC Relic Recovery</h1>
            </div>
            <div class="tablePanel">
              <table class="table table-bordered">
                <tr>
                  <td>Languages</td>
                  <td>Java</td>
                </tr>
                <tr>
                  <td>Concepts</td>
                  <td>OpenCV (Computer Vision), Swerve Driving</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Safety Of Space -->
      <div id="safetyofspace" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
          <div class="centeredContent">
            <div class="darkPanel clickablePanel" (click)="redirectTo('https://github.com/Makiah/Safety-of-Space')">
              <p class="thinFont1 panelHeading">The Safety of Space</p>
            </div>
            <div class="tablePanel">
              <table class="table table-bordered">
                <tr>
                  <td>Languages</td>
                  <td>C#</td>
                </tr>
                <tr>
                  <td>Concepts</td>
                  <td>Gravity Simulation, Game Programming</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div class="parallax__layer parallax__layer--back">
          <div class="imagePanel">
            <img src="/assets/safety-of-space-screenshot.png">
          </div>
        </div>
      </div>

      <!-- Robotics Website -->
      <div id="roboticswebsite" class="parallax__group">
        <div class="parallax__layer parallax__layer--fore">
          <div class="centeredContent">
            <div class="lightPanel clickablePanel" (click)="redirectTo('https://github.com/RoboNatick3737/Website')">
              <h1 class="thinFont1" style="color: black; font-size: 100px;">FTC 3737 Website</h1>
            </div>
            <div class="tablePanel">
              <table class="table table-bordered">
                <tr>
                  <td>Languages</td>
                  <td>TypeScript, HTML</td>
                </tr>
                <tr>
                  <td>Concepts</td>
                  <td>SPA Websites, Parallax</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="parallax__layer parallax__layer--base">
          <div class="imagePanel">
            <img src="/assets/robotics-website.png">
          </div>
        </div>
      </div>

      <!-- SBFRES to FBX -->
      <div id="sbfrestofbx" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
          <div class="centeredContent">
            <div class="darkPanel clickablePanel" (click)="redirectTo('https://github.com/Makiah/BotW-SBFRES-to-FBX')">
              <p class="thinFont1 panelHeading">SBFRES to FBX</p>
            </div>
            <div class="tablePanel">
              <table class="table table-bordered">
                <tr>
                  <td>Languages</td>
                  <td>Python, MAXScript</td>
                </tr>
                <tr>
                  <td>Concepts</td>
                  <td>Modeling, Data Extraction, Automation</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="parallax__layer parallax__layer--back">
          <div class="imagePanel">
            <img src="/assets/bass-view.png">
          </div>
        </div>
      </div>

      <!-- SMART Cancer Navigator -->
      <div id="smart-cancer-navigator" class="parallax__group">
        <div class="parallax__layer parallax__layer--fore">
          <div class="centeredContent">
            <div class="lightPanel clickablePanel" (click)="redirectTo('https://github.com/smart-cancer-navigator/Application')">
              <p class="thinFont1 panelHeading">SMART Cancer Navigator</p>
            </div>
            <div class="tablePanel">
              <table class="table table-bordered">
                <tr>
                  <td>Languages</td>
                  <td>TypeScript, HTML</td>
                </tr>
                <tr>
                  <td>Concepts</td>
                  <td>Database Queries, Bioinformatics</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="parallax__layer parallax__layer--base">
          <div class="imagePanel">
            <img src="/assets/smart-co-website-screenshot.png">
          </div>
        </div>
      </div>

      <!--&lt;!&ndash; Resources &ndash;&gt;-->
      <!--<div id="resourceSection" class="parallax__group">-->
      <!--<div class="parallax__layer parallax__layer&#45;&#45;base">-->
      <!--<div class="centeredContent">-->
      <!--<div class="darkPanel clickablePanel">-->
      <!--<p class="thinFont1 panelHeading">Resources</p>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div class="parallax__layer parallax__layer&#45;&#45;back">-->
      <!--<div class="imagePanel">-->
      <!--<img src="/assets/hospital-outreach.jpg">-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->

      <!--&lt;!&ndash; Contact Us &ndash;&gt;-->
      <!--<div id="contactUsSection" class="parallax__group">-->
      <!--<div class="parallax__layer parallax__layer&#45;&#45;base">-->
      <!--<div class="centeredContent">-->
      <!--<div class="lightPanel clickablePanel">-->
      <!--<p class="thinFont1 panelHeading">Contact Us!</p>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
    </div>
  `,
  styles: [`
    #projectsIntro {
      background-color: rgb(156, 156, 156);
      overflow: hidden;
      padding: 15px;
    }

    #projectsIntro * {
      color: white;
      float: left;
      width: 100%;
      text-align: center;
    }

    ::-webkit-scrollbar {
      display: none;
    }

    /* Parallax base styles
    --------------------------------------------- */

    .parallax {
      height: 500px; /* fallback for older browsers */
      height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-perspective: 300px;
      perspective: 300px;
    }

    .parallax__group {
      position: relative;
      height: 500px; /* fallback for older browsers */
      height: 100vh;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .parallax__layer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .parallax__layer--fore {
      -webkit-transform: translateZ(90px) scale(.7);
      transform: translateZ(90px) scale(.7);
      z-index: 1;
    }

    .parallax__layer--base {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      z-index: 4;
    }

    .parallax__layer--back {
      -webkit-transform: translateZ(-300px) scale(2);
      transform: translateZ(-300px) scale(2);
      z-index: 3;
    }

    .parallax__layer--deep {
      -webkit-transform: translateZ(-600px) scale(3);
      transform: translateZ(-600px) scale(3);
      z-index: 2;
    }

    /* demo styles
 --------------------------------------------- */

    body, html {
      overflow: hidden;
    }

    body {
      font: 100% / 1.5 Arial;
    }

    * {
      margin: 0;
      padding: 0;
    }

    .parallax {
      font-size: 200%;
    }

    /* centre the content in the parallax layers */
    .centeredContent {
      text-align: center;
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 100%;
    }

    /* style the groups
    --------------------------------------------- */

    #relicrecovery {
      z-index: 5; /* slide over group 2 */
    }

    #relicrecovery .parallax__layer--base {
      background: url("/assets/relic-recovery-code.png");
      background-size: 100% auto;
      background-position: center;
    }

    #safetyofspace {
      z-index: 3; /* slide under groups 1 and 3 */
    }

    #safetyofspace .parallax__layer--back {
      background: rgb(255, 255, 255);
    }

    #roboticswebsite {
      z-index: 4; /* slide over group 2 and 4 */
    }

    #roboticswebsite .parallax__layer--base {
      background: rgb(153, 216, 101);
    }

    #sbfrestofbx {
      z-index: 2; /* slide under group 3 and 5 */
    }

    #sbfrestofbx .parallax__layer--deep {
      background: rgb(184, 223, 101);
    }

    #smart-cancer-navigator {
      z-index: 3; /* slide over group 4 and 6 */
    }

    #smart-cancer-navigator .parallax__layer--base {
      background: rgb(214, 229, 100);
    }

    #resourceSection {
      z-index: 2; /* slide under group 5 and 7 */
    }

    #resourceSection .parallax__layer--back {
      background: rgb(245, 235, 100);
    }

    #contactUsSection {
      z-index: 3; /* slide over group 7 */
    }

    #contactUsSection .parallax__layer--base {
      background: #33ec4a url("/assets/old-season/outreach/carnival/pic1.jpg");
      background-size: 140% auto;
      background-position: center;
    }

    /* Custom classes */
    .darkPanel {
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 20px;
      padding: 30px;
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
    }

    .darkPanel .panelHeading {
      color: white;
    }

    .orangePanel {
      background-color: rgba(225, 159, 0, 0.8);
      border-radius: 20px;
      padding: 30px;
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
    }

    .orangePanel .panelHeading {
      color: white;
    }

    .lightPanel {
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      padding: 30px;
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
    }

    .lightPanel .panelHeading {
      color: black;
    }

    .tablePanel {
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      padding: 30px;
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
      font-size: 20px;
    }

    .tablePanel td {
      width: 50%;
    }

    .imagePanel {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: white;
    }

    .panelHeading {
      font-size: 90px;
    }

    .imagePanel > img {
      width: 100%;
      height: auto;

      background-size: 100% auto;
      background-position: center;
    }

    .clickablePanel {
      opacity: 1;
      cursor: default;
    }

    .clickablePanel:hover {
      opacity: 0.8;
    }

    .clickablePanel:active {
      opacity: 0.6;
    }
  `]
})
export class ProjectsComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {}

  ngOnInit() {
    console.log("Got load");
    window.scrollTo(0, 495);
  }

  redirectTo(url: string) {
    window.location.href = url;
  }
}
