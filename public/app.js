(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppModule = exports.MainApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _dec2, _class3; //setup app

//import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//import { ActivatedRoute, RouterModule } from '@angular/router';


//import { Greeter } from './services';

//import './jquery-ui.min.js';


var _core = require('@angular/core');

var _platformBrowser = require('@angular/platform-browser');

require('rxjs/add/operator/map');

require('./babylon.min.js');

require('./jquery.min.js');

require('./jquery.layout.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
@Component({
    selector: 'hello',
    template: '<p>{{ message }}</p>',
})
export class Hello {
    constructor(greeter: Greeter) {
        this.message = greeter.say('hello', 'Angular 2');
    }
}

@Component({
    selector: 'ciao',
    template: '<p>{{ message$ | async }}</p>',
})
export class Ciao {
    constructor(greeter: Greeter, route: ActivatedRoute) {
        this.message$ = route.params
        .map(params => greeter.say('ciao', params.name));
    }
}

@Component({
    selector: 'linker',
    template: '<p><a [href]="url" [title]="name">{{ name }}</a></p>',
})
export class Linker {
    @Input() url;

    constructor(@Attribute('name') name) {
        this.name = name;
    }
}
*/
var MainApp = exports.MainApp = (_dec = (0, _core.Component)({
    selector: 'main-app',
    template: '\n    <!-- -->\n    <div id="container" style="height:100%;width:100%;">\n\n        <div class="ui-layout-center">Center\n            <h1>{{text0}}</h1>\n            <canvas id="renderCanvas"></canvas>\n        </div>\n        <div class="ui-layout-north">North</div>\n        <div class="ui-layout-south">South</div>\n        <div class="ui-layout-east">East</div>\n        <div class="ui-layout-west">West</div>\n    </div>\n    <!-- -->\n        <!--\n        <ul>\n            <li><a [routerLink]="[\'/\']">Hello es6</a></li>\n            <li><a [routerLink]="[\'/ciao\', \'ng2\']">Ciao</a></li>\n        </ul>\n        <router-outlet></router-outlet>\n        <linker name="GitHub" url="https://github.com/shuhei/babel-angular2-app"></linker>\n        -->\n    '
}), _dec(_class = function () {
    function MainApp() {
        _classCallCheck(this, MainApp);

        this.text0 = "test";
        this.scene = null;

        var self = this;
        console.log(this);
        //var text = "hello";
        //console.log(this);
        //console.log("main-app");
        window.addEventListener('DOMContentLoaded', function () {
            console.log("loaded?");
            //$(document).ready(function () {
            //$('body').layout({ applyDefaultStyles: true });
            //});
            $('#container').layout({ resizable: true });
            self.init();
        });
    }

    _createClass(MainApp, [{
        key: 'init',
        value: function init() {
            // get the canvas DOM element
            var canvas = document.getElementById('renderCanvas');

            // load the 3D engine
            var engine = new BABYLON.Engine(canvas, true);

            // createScene function that creates and return the scene
            var createScene = function createScene() {
                // create a basic BJS Scene object
                var scene = new BABYLON.Scene(engine);

                // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
                var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);

                // target the camera to scene origin
                camera.setTarget(BABYLON.Vector3.Zero());

                // attach the camera to the canvas
                camera.attachControl(canvas, false);

                // create a basic light, aiming 0,1,0 - meaning, to the sky
                var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

                // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
                var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);

                // move the sphere upward 1/2 of its height
                sphere.position.y = 1;

                // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
                var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

                // return the created scene
                return scene;
            };

            // call the createScene function
            var scene = createScene();

            this.scene = scene;

            // run the render loop
            engine.runRenderLoop(function () {
                scene.render();
            });

            // the canvas/window resize event handler
            window.addEventListener('resize', function () {
                engine.resize();
            });
        }
    }]);

    return MainApp;
}()) || _class);

//const routing = RouterModule.forRoot([
//{ path: '', component: Hello },
//{ path: 'ciao/:name', component: Ciao },
//]);

var AppModule = exports.AppModule = (_dec2 = (0, _core.NgModule)({
    imports: [_platformBrowser.BrowserModule //,
    //routing,
    ],
    declarations: [MainApp //,
    //Hello,
    //Ciao,
    //Linker,
    ],
    //providers: [
    //Greeter,
    //{ provide: LocationStrategy, useClass: HashLocationStrategy },
    //],
    bootstrap: [MainApp]
}), _dec2(_class3 = function AppModule() {
    _classCallCheck(this, AppModule);
}) || _class3);

},{"./babylon.min.js":1,"./jquery.layout.min.js":1,"./jquery.min.js":1,"@angular/core":"@angular/core","@angular/platform-browser":"@angular/platform-browser","rxjs/add/operator/map":"rxjs/add/operator/map"}],3:[function(require,module,exports){
'use strict';

require('babel-polyfill');

require('zone.js/dist/zone');

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _app = require('./app');

//main entry

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app.AppModule);

/*
//does not work with https://angular.io/docs/ts/latest/quickstart.html that it reqire shim. Since it typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }
*/

},{"./app":2,"@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic","babel-polyfill":"babel-polyfill","zone.js/dist/zone":"zone.js/dist/zone"}]},{},[3])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwic3JjXFxhcHAuanMiLCJzcmNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7Ozs7O2tDQ0FBOztBQUdBOztBQUVBOzs7QUFHQTs7QUFJQTs7O0FBVkE7O0FBRUE7O0FBRUE7O0FBSUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTREYSxPLFdBQUEsTyxXQTFCWixxQkFBVTtBQUNQLGNBQVUsVUFESDtBQUVQO0FBRk8sQ0FBVixDO0FBOEJHLHVCQUFhO0FBQUE7O0FBQUEsYUFIYixLQUdhLEdBSEwsTUFHSztBQUFBLGFBRmIsS0FFYSxHQUZMLElBRUs7O0FBQ1QsWUFBSSxPQUFPLElBQVg7QUFDQSxnQkFBUSxHQUFSLENBQVksSUFBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQU8sZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQUk7QUFDNUMsb0JBQVEsR0FBUixDQUFZLFNBQVo7QUFDQTtBQUNJO0FBQ0o7QUFDQSxjQUFFLFlBQUYsRUFBZ0IsTUFBaEIsQ0FBdUIsRUFBQyxXQUFVLElBQVgsRUFBdkI7QUFDQSxpQkFBSyxJQUFMO0FBQ0gsU0FQRDtBQVFIOzs7OytCQUVLO0FBQ0Y7QUFDQSxnQkFBSSxTQUFTLFNBQVMsY0FBVCxDQUF3QixjQUF4QixDQUFiOztBQUVBO0FBQ0EsZ0JBQUksU0FBUyxJQUFJLFFBQVEsTUFBWixDQUFtQixNQUFuQixFQUEyQixJQUEzQixDQUFiOztBQUVBO0FBQ0EsZ0JBQUksY0FBYyxTQUFkLFdBQWMsR0FBVTtBQUN4QjtBQUNBLG9CQUFJLFFBQVEsSUFBSSxRQUFRLEtBQVosQ0FBa0IsTUFBbEIsQ0FBWjs7QUFFQTtBQUNBLG9CQUFJLFNBQVMsSUFBSSxRQUFRLFVBQVosQ0FBdUIsU0FBdkIsRUFBa0MsSUFBSSxRQUFRLE9BQVosQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBeUIsQ0FBQyxFQUExQixDQUFsQyxFQUFpRSxLQUFqRSxDQUFiOztBQUVBO0FBQ0EsdUJBQU8sU0FBUCxDQUFpQixRQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBakI7O0FBRUE7QUFDQSx1QkFBTyxhQUFQLENBQXFCLE1BQXJCLEVBQTZCLEtBQTdCOztBQUVBO0FBQ0Esb0JBQUksUUFBUSxJQUFJLFFBQVEsZ0JBQVosQ0FBNkIsUUFBN0IsRUFBdUMsSUFBSSxRQUFRLE9BQVosQ0FBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsQ0FBdkMsRUFBbUUsS0FBbkUsQ0FBWjs7QUFFQTtBQUNBLG9CQUFJLFNBQVMsUUFBUSxJQUFSLENBQWEsWUFBYixDQUEwQixTQUExQixFQUFxQyxFQUFyQyxFQUF5QyxDQUF6QyxFQUE0QyxLQUE1QyxDQUFiOztBQUVBO0FBQ0EsdUJBQU8sUUFBUCxDQUFnQixDQUFoQixHQUFvQixDQUFwQjs7QUFFQTtBQUNBLG9CQUFJLFNBQVMsUUFBUSxJQUFSLENBQWEsWUFBYixDQUEwQixTQUExQixFQUFxQyxDQUFyQyxFQUF3QyxDQUF4QyxFQUEyQyxDQUEzQyxFQUE4QyxLQUE5QyxDQUFiOztBQUVBO0FBQ0EsdUJBQU8sS0FBUDtBQUNILGFBM0JEOztBQTZCQTtBQUNBLGdCQUFJLFFBQVEsYUFBWjs7QUFFQSxpQkFBSyxLQUFMLEdBQWEsS0FBYjs7QUFFQTtBQUNBLG1CQUFPLGFBQVAsQ0FBcUIsWUFBVTtBQUMzQixzQkFBTSxNQUFOO0FBQ0gsYUFGRDs7QUFJQTtBQUNBLG1CQUFPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVU7QUFDeEMsdUJBQU8sTUFBUDtBQUNILGFBRkQ7QUFJSDs7Ozs7O0FBR0w7QUFDSTtBQUNBO0FBQ0o7O0lBbUJhLFMsV0FBQSxTLFlBakJaLG9CQUFTO0FBQ04sYUFBUyxnQ0FDUTtBQUNiO0FBRkssS0FESDtBQUtOLGtCQUFjLENBQ1YsT0FEVSxDQUNIO0FBQ1A7QUFDQTtBQUNBO0FBSlUsS0FMUjtBQVdOO0FBQ0k7QUFDQTtBQUNKO0FBQ0EsZUFBVyxDQUFDLE9BQUQ7QUFmTCxDQUFULEM7Ozs7Ozs7QUN6SkQ7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBUEE7O0FBU0Esc0RBQXlCLGVBQXpCOztBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiIsIi8vc2V0dXAgYXBwXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBJbnB1dCwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbi8vaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbi8vaW1wb3J0IHsgR3JlZXRlciB9IGZyb20gJy4vc2VydmljZXMnO1xyXG5cclxuaW1wb3J0ICcuL2JhYnlsb24ubWluLmpzJztcclxuaW1wb3J0ICcuL2pxdWVyeS5taW4uanMnO1xyXG4vL2ltcG9ydCAnLi9qcXVlcnktdWkubWluLmpzJztcclxuaW1wb3J0ICcuL2pxdWVyeS5sYXlvdXQubWluLmpzJztcclxuXHJcbi8qXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoZWxsbycsXHJcbiAgICB0ZW1wbGF0ZTogJzxwPnt7IG1lc3NhZ2UgfX08L3A+JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlbGxvIHtcclxuICAgIGNvbnN0cnVjdG9yKGdyZWV0ZXI6IEdyZWV0ZXIpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBncmVldGVyLnNheSgnaGVsbG8nLCAnQW5ndWxhciAyJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjaWFvJyxcclxuICAgIHRlbXBsYXRlOiAnPHA+e3sgbWVzc2FnZSQgfCBhc3luYyB9fTwvcD4nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2lhbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihncmVldGVyOiBHcmVldGVyLCByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UkID0gcm91dGUucGFyYW1zXHJcbiAgICAgICAgLm1hcChwYXJhbXMgPT4gZ3JlZXRlci5zYXkoJ2NpYW8nLCBwYXJhbXMubmFtZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGlua2VyJyxcclxuICAgIHRlbXBsYXRlOiAnPHA+PGEgW2hyZWZdPVwidXJsXCIgW3RpdGxlXT1cIm5hbWVcIj57eyBuYW1lIH19PC9hPjwvcD4nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlua2VyIHtcclxuICAgIEBJbnB1dCgpIHVybDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAQXR0cmlidXRlKCduYW1lJykgbmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbn1cclxuKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21haW4tYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8IS0tIC0tPlxyXG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIHN0eWxlPVwiaGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWxheW91dC1jZW50ZXJcIj5DZW50ZXJcclxuICAgICAgICAgICAgPGgxPnt7dGV4dDB9fTwvaDE+XHJcbiAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJyZW5kZXJDYW52YXNcIj48L2NhbnZhcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LW5vcnRoXCI+Tm9ydGg8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LXNvdXRoXCI+U291dGg8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LWVhc3RcIj5FYXN0PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWxheW91dC13ZXN0XCI+V2VzdDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIC0tPlxyXG4gICAgICAgIDwhLS1cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy8nXVwiPkhlbGxvIGVzNjwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvY2lhbycsICduZzInXVwiPkNpYW88L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8bGlua2VyIG5hbWU9XCJHaXRIdWJcIiB1cmw9XCJodHRwczovL2dpdGh1Yi5jb20vc2h1aGVpL2JhYmVsLWFuZ3VsYXIyLWFwcFwiPjwvbGlua2VyPlxyXG4gICAgICAgIC0tPlxyXG4gICAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5BcHAge1xyXG4gICAgdGV4dDAgPSBcInRlc3RcIjtcclxuICAgIHNjZW5lID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICAvL3ZhciB0ZXh0ID0gXCJoZWxsb1wiO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm1haW4tYXBwXCIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkZWQ/XCIpO1xyXG4gICAgICAgICAgICAvLyQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICAgICAvLyQoJ2JvZHknKS5sYXlvdXQoeyBhcHBseURlZmF1bHRTdHlsZXM6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIC8vfSk7XHJcbiAgICAgICAgICAgICQoJyNjb250YWluZXInKS5sYXlvdXQoe3Jlc2l6YWJsZTp0cnVlfSk7XHJcbiAgICAgICAgICAgIHNlbGYuaW5pdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICAvLyBnZXQgdGhlIGNhbnZhcyBET00gZWxlbWVudFxyXG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVuZGVyQ2FudmFzJyk7XHJcblxyXG4gICAgICAgIC8vIGxvYWQgdGhlIDNEIGVuZ2luZVxyXG4gICAgICAgIHZhciBlbmdpbmUgPSBuZXcgQkFCWUxPTi5FbmdpbmUoY2FudmFzLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlU2NlbmUgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFuZCByZXR1cm4gdGhlIHNjZW5lXHJcbiAgICAgICAgdmFyIGNyZWF0ZVNjZW5lID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgYmFzaWMgQkpTIFNjZW5lIG9iamVjdFxyXG4gICAgICAgICAgICB2YXIgc2NlbmUgPSBuZXcgQkFCWUxPTi5TY2VuZShlbmdpbmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgRnJlZUNhbWVyYSwgYW5kIHNldCBpdHMgcG9zaXRpb24gdG8gKHg6MCwgeTo1LCB6Oi0xMClcclxuICAgICAgICAgICAgdmFyIGNhbWVyYSA9IG5ldyBCQUJZTE9OLkZyZWVDYW1lcmEoJ2NhbWVyYTEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUsLTEwKSwgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGFyZ2V0IHRoZSBjYW1lcmEgdG8gc2NlbmUgb3JpZ2luXHJcbiAgICAgICAgICAgIGNhbWVyYS5zZXRUYXJnZXQoQkFCWUxPTi5WZWN0b3IzLlplcm8oKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBhdHRhY2ggdGhlIGNhbWVyYSB0byB0aGUgY2FudmFzXHJcbiAgICAgICAgICAgIGNhbWVyYS5hdHRhY2hDb250cm9sKGNhbnZhcywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgYmFzaWMgbGlnaHQsIGFpbWluZyAwLDEsMCAtIG1lYW5pbmcsIHRvIHRoZSBza3lcclxuICAgICAgICAgICAgdmFyIGxpZ2h0ID0gbmV3IEJBQllMT04uSGVtaXNwaGVyaWNMaWdodCgnbGlnaHQxJywgbmV3IEJBQllMT04uVmVjdG9yMygwLDEsMCksIHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGJ1aWx0LWluIFwic3BoZXJlXCIgc2hhcGU7IGl0cyBjb25zdHJ1Y3RvciB0YWtlcyA1IHBhcmFtczogbmFtZSwgd2lkdGgsIGRlcHRoLCBzdWJkaXZpc2lvbnMsIHNjZW5lXHJcbiAgICAgICAgICAgIHZhciBzcGhlcmUgPSBCQUJZTE9OLk1lc2guQ3JlYXRlU3BoZXJlKCdzcGhlcmUxJywgMTYsIDIsIHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgdGhlIHNwaGVyZSB1cHdhcmQgMS8yIG9mIGl0cyBoZWlnaHRcclxuICAgICAgICAgICAgc3BoZXJlLnBvc2l0aW9uLnkgPSAxO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgYnVpbHQtaW4gXCJncm91bmRcIiBzaGFwZTsgaXRzIGNvbnN0cnVjdG9yIHRha2VzIHRoZSBzYW1lIDUgcGFyYW1zIGFzIHRoZSBzcGhlcmUncyBvbmVcclxuICAgICAgICAgICAgdmFyIGdyb3VuZCA9IEJBQllMT04uTWVzaC5DcmVhdGVHcm91bmQoJ2dyb3VuZDEnLCA2LCA2LCAyLCBzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhlIGNyZWF0ZWQgc2NlbmVcclxuICAgICAgICAgICAgcmV0dXJuIHNjZW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FsbCB0aGUgY3JlYXRlU2NlbmUgZnVuY3Rpb25cclxuICAgICAgICB2YXIgc2NlbmUgPSBjcmVhdGVTY2VuZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcblxyXG4gICAgICAgIC8vIHJ1biB0aGUgcmVuZGVyIGxvb3BcclxuICAgICAgICBlbmdpbmUucnVuUmVuZGVyTG9vcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzY2VuZS5yZW5kZXIoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhlIGNhbnZhcy93aW5kb3cgcmVzaXplIGV2ZW50IGhhbmRsZXJcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZW5naW5lLnJlc2l6ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLy9jb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgLy97IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhlbGxvIH0sXHJcbiAgICAvL3sgcGF0aDogJ2NpYW8vOm5hbWUnLCBjb21wb25lbnQ6IENpYW8gfSxcclxuLy9dKTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZS8vLFxyXG4gICAgICAgIC8vcm91dGluZyxcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNYWluQXBwLy8sXHJcbiAgICAgICAgLy9IZWxsbyxcclxuICAgICAgICAvL0NpYW8sXHJcbiAgICAgICAgLy9MaW5rZXIsXHJcbiAgICBdLFxyXG4gICAgLy9wcm92aWRlcnM6IFtcclxuICAgICAgICAvL0dyZWV0ZXIsXHJcbiAgICAgICAgLy97IHByb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9LFxyXG4gICAgLy9dLFxyXG4gICAgYm9vdHN0cmFwOiBbTWFpbkFwcF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG5cclxufVxyXG4iLCIvL21haW4gZW50cnlcclxuXHJcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcclxuXHJcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAnO1xyXG5cclxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG5cclxuLypcclxuLy9kb2VzIG5vdCB3b3JrIHdpdGggaHR0cHM6Ly9hbmd1bGFyLmlvL2RvY3MvdHMvbGF0ZXN0L3F1aWNrc3RhcnQuaHRtbCB0aGF0IGl0IHJlcWlyZSBzaGltLiBTaW5jZSBpdCB0eXBlc2NyaXB0XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gIHRlbXBsYXRlOiBgPGgxPkhlbGxvIHt7bmFtZX19PC9oMT5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBuYW1lID0gJ0FuZ3VsYXInOyB9XHJcbiovXHJcbiJdfQ==