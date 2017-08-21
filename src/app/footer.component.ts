import { Component } from "@angular/core";

@Component({
  selector: "footer",
  template: `
    <div id="footerWrapper">
      <div id="footerInformation">
        <div class="footerTile">
          <p><b>Technologies Employed</b></p>
          <ul>
            <li><a href="http://angular.io">Angular 4</a></li>
            <li><a href="http://getbootstrap.com">Bootstrap</a></li>
            <li><a href="http://ng-bootstrap.github.io">ng-bootstrap</a></li>
          </ul>
        </div>
        <div class="footerTile">
          <p><b>Best Viewed In</b></p>
          <ul>
            <li><a href="http://google.com/chrome">Google Chrome</a></li>
            <li><a href="http://mozilla.com">Mozilla Firefox</a></li>
            <li><a href="http://www.opera.com">Opera</a></li>
          </ul>
        </div>
        <div class="footerTile">
          <p><b>Extended Resources</b></p>
          <ul>
            <li><a href="http://github.com">GitHub</a></li>
            <li><a href="http://bitbucket.org">BitBucket</a></li>
          </ul>
        </div>
      </div>
      <br>

      <p class="thinFont2" style="font-size: 16px">© 2017 Makiah Bennett (Inspired by <a href="https://neuethemes.net/preview/gridus/?page=layouts/samuel/index.html">Samuel Anderson's Gridus Template)</a></p>
    </div>
  `,
  styles: [`
    p, a {
      margin: 0;
      color: white;
    }

    #footerWrapper {
      background-color: #4d4d4d;
      padding: 30px;
    }
    
    #footerInformation {
      overflow: hidden;
      width: 100%;
    }
    
    .footerTile {
      width: calc(100% / 3);
      padding: 10px;
      text-align: center;
      float: left;
    }
    
    .footerTile ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  `]
})
export class FooterComponent {

}
