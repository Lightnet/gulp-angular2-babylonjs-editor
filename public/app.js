(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainApp = undefined;

var _dec, _class; //setup component main page html

var _core = require('@angular/core');

require('rxjs/add/operator/map');

var _game = require('./services/game.service');

require('./babylon.min.js');

require('./jquery.min.js');

require('./jquery-ui.min.js');

require('./jquery.layout.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainApp = exports.MainApp = (_dec = (0, _core.Component)({
    selector: 'main-app',
    template: '\n    <gameeditor></gameeditor>\n    '
}), _dec(_class = function MainApp(gameservice) {
    _classCallCheck(this, MainApp);

    console.log(gameservice);
    this.gameservice = gameservice;
}) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], MainApp);

},{"./babylon.min.js":1,"./jquery-ui.min.js":1,"./jquery.layout.min.js":1,"./jquery.min.js":1,"./services/game.service":16,"@angular/core":"@angular/core","rxjs/add/operator/map":"rxjs/add/operator/map"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppModule = undefined;

var _dec, _class; //setup app

//import { NgModule, Component, Input, Attribute } from '@angular/core';

//import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//import { ActivatedRoute, RouterModule } from '@angular/router';


var _core = require('@angular/core');

var _forms = require('@angular/forms');

var _platformBrowser = require('@angular/platform-browser');

require('rxjs/add/operator/map');

var _ng2AceEditor = require('ng2-ace-editor');

var _app = require('./app.component');

var _assets = require('./components/assets.component');

var _scene = require('./components/scene.component');

var _objectprops = require('./components/objectprops.component');

var _gameeditor = require('./components/gameeditor.component');

var _codeeditor = require('./components/codeeditor.component');

var _scripteditorexplore = require('./components/scripteditorexplore.component');

var _scripteditorlayout = require('./components/scripteditorlayout.component');

var _scripteditormenu = require('./components/scripteditormenu.component');

var _editormenu = require('./components/editormenu.component');

var _editorpanel = require('./components/editorpanel.component');

var _navmenu = require('./components/navmenu.component');

var _game = require('./services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const routing = RouterModule.forRoot([
//{ path: '', component: Hello },
//{ path: 'ciao/:name', component: Ciao },
//]);

var AppModule = exports.AppModule = (_dec = (0, _core.NgModule)({
    imports: [_platformBrowser.BrowserModule, _forms.FormsModule],
    declarations: [_app.MainApp, _ng2AceEditor.AceEditorDirective, _ng2AceEditor.AceEditorComponent, _gameeditor.GameEditor, _navmenu.NavMenu, _scripteditorlayout.ScriptEditorLayout, _scene.SceneList, _assets.AssetsList, _scripteditormenu.ScriptEditorMenu, _scripteditorexplore.ScriptEditorExplore, _codeeditor.CodeEditor, _objectprops.Objectprops, _editorpanel.EditorPanel, _editormenu.EditorMenu],
    providers: [_game.GameService],
    bootstrap: [_app.MainApp]
}), _dec(_class = function AppModule() {
    _classCallCheck(this, AppModule);
}) || _class);

},{"./app.component":2,"./components/assets.component":4,"./components/codeeditor.component":5,"./components/editormenu.component":6,"./components/editorpanel.component":7,"./components/gameeditor.component":8,"./components/navmenu.component":9,"./components/objectprops.component":10,"./components/scene.component":11,"./components/scripteditorexplore.component":12,"./components/scripteditorlayout.component":13,"./components/scripteditormenu.component":14,"./services/game.service":16,"@angular/core":"@angular/core","@angular/forms":"@angular/forms","@angular/platform-browser":"@angular/platform-browser","ng2-ace-editor":"ng2-ace-editor","rxjs/add/operator/map":"rxjs/add/operator/map"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AssetsList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AssetsList = exports.AssetsList = (_dec = (0, _core.Component)({
    selector: 'assets-list',
    template: '\n        Assets\n        <!--<button (click)="refresh()">Refresh</button>-->\n        <!--\n        <div *ngIf="gameservice.scene">\n            <a *ngFor="let obj of gameservice.scene.children">\n                <label>{{obj.name}}</label>\n            </a>\n        </div>\n        -->\n    '
}), _dec(_class = function () {
    function AssetsList(gameservice) {
        _classCallCheck(this, AssetsList);

        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    _createClass(AssetsList, [{
        key: 'refresh',
        value: function refresh() {
            console.log("refresh");
            console.log(this.gameservice);
            //console.log(this.gameservice.scene.children[0]);
        }
    }]);

    return AssetsList;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], AssetsList);

},{"../services/game.service":16,"@angular/core":"@angular/core"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CodeEditor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; //add "AceEditorDirective" to your modules list

var _ng2AceEditor = require('ng2-ace-editor');

var _core = require('@angular/core');

require('zone.js/dist/zone');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CodeEditor = exports.CodeEditor = (_dec = (0, _core.Component)({
    selector: 'codeeditor-component',
    template: '\n    <div ace-editor\n       [text]="text"\n       [options]="options"\n       [readOnly]="false"\n       [autoUpdateContent]="true"\n       (textChanged)="onChange($event)"\n       style="min-height: 200px; height:100%; width:100%; overflow: auto;margin: 0;padding : 0;"></div>\n    '
}), _dec(_class = function () {
    function CodeEditor() {
        _classCallCheck(this, CodeEditor);

        this.text = "Test";
        this.options = { printMargin: false };
    }
    //options:any = {maxLines: 1000, printMargin: false};


    _createClass(CodeEditor, [{
        key: 'onChange',
        value: function onChange(code) {
            console.log("new code", code);
        }
    }]);

    return CodeEditor;
}()) || _class);

},{"@angular/core":"@angular/core","ng2-ace-editor":"ng2-ace-editor","zone.js/dist/zone":"zone.js/dist/zone"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditorMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

require('../babylon.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorMenu = exports.EditorMenu = (_dec = (0, _core.Component)({
    selector: 'editormenu',
    styleUrls: ['./components/editormenu.component.css'],
    template: '\n    <ul>\n    <li class="dropdown" >\n    <a href="#" class="dropbtn">File</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#" (click)="scriptopenscene();">Open Scene</a>\n      <a href="#" (click)="scriptloadscene();">Load Scene</a>\n      <a href="#" (click)="scriptsavescene();">Save Scene</a>\n      <a href="#" (click)="scriptclearscene();">Clear Scene</a>\n      <a href="#" (click)="scriptdeletescene();">Delete Scene</a>\n    </div>\n    </li>\n    <li class="dropdown">\n    <a href="#" class="dropbtn">Edit</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#" (click)="scriptdeleteobject();">Delete Object</a>\n    </div>\n    </li>\n\n    <li class="dropdown">\n    <a href="#" class="dropbtn">Components</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#" (click)="addcube();" >Cube</a>\n      <a href="#" (click)="addspshere();">Sphere</a>\n      <a href="#" (click)="addsplane();">Plane</a>\n      <a href="#" (click)="addmesh();">Mesh</a>\n      <a href="#" (click)="addmaterial();">Material</a>\n    </div>\n    </li>\n    <!--\n    <li class="dropdown"><a href="#" class="dropbtn">Packages</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#">Scripts</a>\n      <a href="#">Mods</a>\n    </div>\n    </li>\n    <li class="dropdown"><a href="#" class="dropbtn">Help</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#">Docs</a>\n      <a href="#">About</a>\n    </div>\n    </li>\n    <li><a href="#" class="dropbtn" (click)="scriptbuild();">Build</a></li>\n    <li><a href="#" class="dropbtn" (click)="scriptdebug();">Debug</a></li>\n    <li><a href="#" class="dropbtn" (click)="scriptplay();">Play</a></li>\n    <li><a href="#" class="dropbtn" (click)="scriptstop();">Stop</a></li>\n    -->\n    </ul>\n    '
}), _dec(_class = function () {
    function EditorMenu(gameservice) {
        _classCallCheck(this, EditorMenu);

        this.gameservice = gameservice;
    }

    _createClass(EditorMenu, [{
        key: 'scriptopenscene',
        value: function scriptopenscene() {
            console.log("scriptopenscene");
        }
    }, {
        key: 'scriptloadscene',
        value: function scriptloadscene() {
            console.log("scriptloadscene");
        }
    }, {
        key: 'scriptsavescene',
        value: function scriptsavescene() {
            console.log("scriptsavescene");
        }
    }, {
        key: 'scriptdeletescene',
        value: function scriptdeletescene() {
            console.log("scriptdeletescene");
        }
    }, {
        key: 'scriptclearscene',
        value: function scriptclearscene() {
            console.log("scriptclearscene");
            if (this.gameservice.scene != null) {
                var objscene = this.gameservice.scene;
                for (var i = objscene.meshes.length; i > 0; i--) {
                    objscene.meshes[0].dispose();
                }
            }
        }
    }, {
        key: 'scriptdeleteobject',
        value: function scriptdeleteobject() {
            //console.log('scriptdeleteobject');
            if (this.gameservice.selectobject != null) {
                this.gameservice.selectobject.dispose();
                this.gameservice.selectobject = null;
            }
        }
    }, {
        key: 'scriptbuild',
        value: function scriptbuild() {
            console.log('scriptbuild');
        }
    }, {
        key: 'scriptdebug',
        value: function scriptdebug() {
            console.log('scriptdebug');
        }
    }, {
        key: 'scriptplay',
        value: function scriptplay() {
            console.log('scriptplay');
        }
    }, {
        key: 'scriptstop',
        value: function scriptstop() {
            console.log('scriptstop');
        }
    }, {
        key: 'addcube',
        value: function addcube() {
            console.log("addcube");
            if (this.gameservice.scene != null) {
                BABYLON.MeshBuilder.CreateBox('box1', { height: 1, width: 1, depth: 1 }, this.gameservice.scene);
            }
        }
    }, {
        key: 'addspshere',
        value: function addspshere() {
            console.log("addspshere");
            if (this.gameservice.scene != null) {
                BABYLON.MeshBuilder.CreateSphere('sphere1', { diameter: 1 }, this.gameservice.scene);
            }
        }
    }, {
        key: 'addsplane',
        value: function addsplane() {
            console.log("addsplane");
            if (this.gameservice.scene != null) {
                var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, this.gameservice.scene);
            }
        }
    }, {
        key: 'addmesh',
        value: function addmesh() {
            console.log("addmesh");
        }
    }, {
        key: 'addmaterial',
        value: function addmaterial() {
            console.log("addmaterial > ?");
        }
    }]);

    return EditorMenu;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], EditorMenu);

},{"../babylon.min.js":1,"../services/game.service":16,"@angular/core":"@angular/core"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditorPanel = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorPanel = exports.EditorPanel = (_dec = (0, _core.Component)({
    selector: 'editorpanel',
    styleUrls: ['./components/editorpanel.component.css'],
    template: '\n        <div style="height:100%;width:100%;">\n            <div style="width:100%;height:32px;margin:0;padding:0;">\n                <ul>\n                    <li> <a class="dropbtn" href="#">Script</a> </li>\n                    <li> <a class="dropbtn" href="#">Console</a> </li>\n                </ul>\n            </div>\n            <div style="width:20%;height:100%;float:left;margin:0;padding:0;">\n                <scripteditormenu></scripteditormenu>\n                <scripteditorexplore></scripteditorexplore>\n            </div>\n            <div style="width:80%;height:100%;float:left;">\n                <codeeditor-component style="margin:0;padding:0;"></codeeditor-component>\n            </div>\n        </div>\n    '
}), _dec(_class = function EditorPanel() {
    _classCallCheck(this, EditorPanel);
}) || _class);

},{"@angular/core":"@angular/core"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameEditor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; //setup app

var _core = require('@angular/core');

require('rxjs/add/operator/map');

var _game = require('../services/game.service');

require('../babylon.min.js');

require('../jquery.min.js');

require('../jquery-ui.min.js');

require('../jquery.layout.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameEditor = exports.GameEditor = (_dec = (0, _core.Component)({
    selector: 'gameeditor',
    template: '\n    <editormenu></editormenu>\n    <div id="container" style="height:100%;">\n        <div class="ui-layout-center" style="margin: 0;padding : 0;">\n            <canvas id="renderCanvas"></canvas>\n        </div>\n        <div class="ui-layout-north">\n\n        </div>\n        <div class="ui-layout-south" style="margin: 0;padding : 0;">\n            <editorpanel></editorpanel>\n        </div>\n        <div class="ui-layout-east">\n            <scene-list></scene-list>\n            <objectprops></objectprops>\n        </div>\n        <div class="ui-layout-west">\n            <assets-list></assets-list>\n        </div>\n    </div>\n    '
}), _dec(_class = function () {
    function GameEditor(gameservice) {
        _classCallCheck(this, GameEditor);

        this.scene = null;

        this.gameservice = gameservice;
        //var self = this;
        //window.addEventListener('DOMContentLoaded', ()=>{
        //console.log("loaded?");
        //self.init();
        //});
    }

    _createClass(GameEditor, [{
        key: 'ngOnInit',
        value: function ngOnInit() {
            console.log("init layout!");

            this.setup_layout();
            this.init();
        }
    }, {
        key: 'setup_layout',
        value: function setup_layout() {
            var self = this;
            $('#container').layout({
                resizable: true,
                onresize: function onresize() {
                    //console.log("resize");
                    self.resizecanvas();
                }
            });
            var layout = $('#container').layout();
            layout.sizePane("south", 250);
            layout.toggle("north");
        }
    }, {
        key: 'resizecanvas',
        value: function resizecanvas() {
            if (this.scene != null) {
                var layout = $('#container').layout();
                var width = layout.state.center.innerWidth;
                var height = layout.state.center.innerHeight;
                //this.camera.aspect = width / height;
                //this.camera.updateProjectionMatrix();
                //this.renderer.setSize( width,height );
                //this.scene.width = width;
                //this.scene.height = height;
                //console.log("resize");
                layout = null;
                width = null;
                height = null;
            }
        }
    }, {
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
            this.gameservice.scene = scene;

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

    return GameEditor;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], GameEditor);

},{"../babylon.min.js":1,"../jquery-ui.min.js":1,"../jquery.layout.min.js":1,"../jquery.min.js":1,"../services/game.service":16,"@angular/core":"@angular/core","rxjs/add/operator/map":"rxjs/add/operator/map"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

require('../babylon.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavMenu = exports.NavMenu = (_dec = (0, _core.Component)({
    selector: 'navmenu',
    styleUrls: ['./components/navmenu.component.css'],
    template: '\n        <ul>\n        <li class="dropdown" >\n        <a href="#" class="dropbtn">File</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#">Open Scene</a>\n          <a href="#">Load Scene</a>\n          <a href="#">Save Scene</a>\n          <a href="#"  (click)="clearscene();">Clear Scene</a>\n          <a href="#">Delete Scene</a>\n        </div>\n        </li>\n        <li class="dropdown">\n        <a href="#" class="dropbtn">Edit</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#">Delete Object</a>\n        </div>\n        </li>\n\n        <li class="dropdown">\n        <a href="#" class="dropbtn">Components</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#" (click)="addcube();" >Cube</a>\n          <a href="#">Sphere</a>\n          <a href="#">Plane</a>\n          <a href="#">Mesh</a>\n          <a href="#">Material</a>\n        </div>\n        </li>\n        <li class="dropdown"><a href="#" class="dropbtn">Packages</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#">Scripts</a>\n          <a href="#">Mods</a>\n        </div>\n        </li>\n        <li class="dropdown"><a href="#" class="dropbtn">Help</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#">Docs</a>\n          <a href="#">About</a>\n        </div>\n        </li>\n        <li><a href="#" class="dropbtn">Build</a></li>\n        <li><a href="#" class="dropbtn">Debug</a></li>\n        <li><a href="#" class="dropbtn">Play</a></li>\n        <li><a href="#" class="dropbtn">Stop</a></li>\n        </ul>\n    '
}), _dec(_class = function () {
    function NavMenu(gameservice) {
        _classCallCheck(this, NavMenu);

        this.gameservice = gameservice;
    }

    _createClass(NavMenu, [{
        key: 'clearscene',
        value: function clearscene() {
            if (this.gameservice.scene != null) {
                var objscene = this.gameservice.scene;
                while (objscene.children.length) {
                    objscene.remove(objscene.children[0]);
                }
            }
        }
    }, {
        key: 'addcube',
        value: function addcube() {
            if (this.gameservice.scene != null) {
                console.log("cube");
                var geometry = new THREE.BoxGeometry(1, 1, 1);
                var material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
                var cube = new THREE.Mesh(geometry, material);
                cube.name = "cube";
                this.gameservice.scene.add(cube);
            }
        }
    }]);

    return NavMenu;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], NavMenu);

},{"../babylon.min.js":1,"../services/game.service":16,"@angular/core":"@angular/core"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Objectprops = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Objectprops = exports.Objectprops = (_dec = (0, _core.Component)({
    selector: 'objectprops',
    template: '\n        <div style="height:50%;width:100%">\n            Props:\n            <!--<button (click)="refresh()">Refresh</button>-->\n            <div *ngIf="gameservice.selectobject">\n                Object: {{gameservice.selectobject.id}}<button (click)="meshdelete()">Delete</button>\n                <br><label>px:<input type="number" ng-model=\'val | number: 2\' [ngModel]="gameservice.selectobject.position.x" value="{{gameservice.selectobject.position.x}}" (ngModelChange)="objposx($event)" step ="0.000001" /></label>\n                <br><label>py:<input type="number" [ngModel]="gameservice.selectobject.position.y" value="{{gameservice.selectobject.position.y}}" (ngModelChange)="objposy($event)" step ="0.000001" /></label>\n                <br><label>pz:<input type="number" [ngModel]="gameservice.selectobject.position.z" value="{{gameservice.selectobject.position.z}}" (ngModelChange)="objposz($event)" step ="0.000001" /></label>\n            </div>\n        </div>\n    '
}), _dec(_class = function () {
    function Objectprops(gameservice) {
        _classCallCheck(this, Objectprops);

        this.posx = 0;

        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    _createClass(Objectprops, [{
        key: 'objposx',
        value: function objposx(value) {
            console.log(value);
            console.log("pos x");
            if (this.gameservice.selectobject != null) {
                this.gameservice.selectobject.position.x = value;
            }
        }
    }, {
        key: 'objposy',
        value: function objposy(value) {
            console.log(value);
            console.log("pos y");
            if (this.gameservice.selectobject != null) {
                this.gameservice.selectobject.position.y = value;
            }
        }
    }, {
        key: 'objposz',
        value: function objposz(value) {
            console.log(value);
            console.log("pos z");
            if (this.gameservice.selectobject != null) {
                this.gameservice.selectobject.position.z = value;
            }
        }
    }, {
        key: 'meshdelete',
        value: function meshdelete() {
            console.log("delete");
            if (this.gameservice.selectobject != null) {
                this.gameservice.selectobject.dispose();
                this.gameservice.selectobject = null;
            }
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            //console.log("refresh");
            //console.log(this.gameservice);
            //console.log(this.gameservice.scene.children[0]);
        }
    }]);

    return Objectprops;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], Objectprops);

},{"../services/game.service":16,"@angular/core":"@angular/core"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SceneList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SceneList = exports.SceneList = (_dec = (0, _core.Component)({
    selector: 'scene-list',
    template: '\n        <div style="height:50%;width:100%">\n            Scene\n            <!--<button (click)="refresh()">Refresh</button>-->\n            <div *ngIf="gameservice.scene">\n                <ul>\n                <li *ngFor="let obj of gameservice.scene.meshes">\n                    <label (click)="selectobject(obj)">{{obj.name}}</label>\n                </li>\n                </ul>\n            </div>\n        </div>\n    '
}), _dec(_class = function () {
    function SceneList(gameservice) {
        _classCallCheck(this, SceneList);

        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    _createClass(SceneList, [{
        key: 'selectobject',
        value: function selectobject(_obj) {
            console.log("scene object selected:");
            console.log(_obj);
            this.gameservice.selectobject = _obj;
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            console.log("refresh");
            console.log(this.gameservice);
            console.log(this.gameservice.scene.meshes);
        }
    }]);

    return SceneList;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], SceneList);

},{"../services/game.service":16,"@angular/core":"@angular/core"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScriptEditorExplore = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScriptEditorExplore = exports.ScriptEditorExplore = (_dec = (0, _core.Component)({
    selector: 'scripteditorexplore',
    template: '\n        <div style="width:100%;">\n        Panel directory folder\n        </div>\n    '
}), _dec(_class = function ScriptEditorExplore() {
    _classCallCheck(this, ScriptEditorExplore);
}) || _class);

},{"@angular/core":"@angular/core"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScriptEditorLayout = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScriptEditorLayout = exports.ScriptEditorLayout = (_dec = (0, _core.Component)({
    selector: 'scripteditorlayout',
    template: '\n        <div style="height:100%;width:100%;">\n            <div style="width:20%;height:100%;float:left;margin:0;padding:0;">\n                <scripteditormenu></scripteditormenu>\n                <scripteditorexplore></scripteditorexplore>\n            </div>\n            <div style="width:80%;height:100%;float:left;">\n            <codeeditor-component style="margin:0;padding:0;"></codeeditor-component>\n            </div>\n        </div>\n    '
}), _dec(_class = function ScriptEditorLayout() {
    _classCallCheck(this, ScriptEditorLayout);
}) || _class);

},{"@angular/core":"@angular/core"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScriptEditorMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScriptEditorMenu = exports.ScriptEditorMenu = (_dec = (0, _core.Component)({
    selector: 'scripteditormenu',
    template: '\n        Action\n        <button (click)="ScriptReload();">Reload</button>\n        <button (click)="ScriptSave();">Save</button>\n        <button (click)="ScriptRun();">Run</button>\n        <button (click)="ScriptCreate();">Create</button>\n        <button (click)="ScriptDelete();">Delete</button>\n    '
}), _dec(_class = function () {
    function ScriptEditorMenu() {
        _classCallCheck(this, ScriptEditorMenu);
    }

    _createClass(ScriptEditorMenu, [{
        key: 'ScriptReload',
        value: function ScriptReload() {
            console.log('Reload');
        }
    }, {
        key: 'ScriptSave',
        value: function ScriptSave() {
            console.log('Save');
        }
    }, {
        key: 'ScriptRun',
        value: function ScriptRun() {
            console.log('Run');
        }
    }, {
        key: 'ScriptDelete',
        value: function ScriptDelete() {
            console.log('Delete');
        }
    }, {
        key: 'ScriptCreate',
        value: function ScriptCreate() {
            console.log('Create');
        }
    }]);

    return ScriptEditorMenu;
}()) || _class);

},{"@angular/core":"@angular/core"}],15:[function(require,module,exports){
'use strict';

require('babel-polyfill');

require('zone.js/dist/zone');

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _app = require('./app.module');

//main entry and setup boot

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app.AppModule);

},{"./app.module":3,"@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic","babel-polyfill":"babel-polyfill","zone.js/dist/zone":"zone.js/dist/zone"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameService = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameService = exports.GameService = (_dec = (0, _core.Injectable)(), _dec(_class = function GameService() {
    _classCallCheck(this, GameService);

    this.scene = null;
    this.selectobject = null;
}) || _class);

},{"@angular/core":"@angular/core"}]},{},[15])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwic3JjXFxhcHAuY29tcG9uZW50LmpzIiwic3JjXFxhcHAubW9kdWxlLmpzIiwic3JjXFxjb21wb25lbnRzXFxhc3NldHMuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxjb2RlZWRpdG9yLmNvbXBvbmVudC5qcyIsInNyY1xcY29tcG9uZW50c1xcZWRpdG9ybWVudS5jb21wb25lbnQuanMiLCJzcmNcXGNvbXBvbmVudHNcXGVkaXRvcnBhbmVsLmNvbXBvbmVudC5qcyIsInNyY1xcY29tcG9uZW50c1xcZ2FtZWVkaXRvci5jb21wb25lbnQuanMiLCJzcmNcXGNvbXBvbmVudHNcXG5hdm1lbnUuY29tcG9uZW50LmpzIiwic3JjXFxjb21wb25lbnRzXFxvYmplY3Rwcm9wcy5jb21wb25lbnQuanMiLCJzcmNcXGNvbXBvbmVudHNcXHNjZW5lLmNvbXBvbmVudC5qcyIsInNyY1xcY29tcG9uZW50c1xcc2NyaXB0ZWRpdG9yZXhwbG9yZS5jb21wb25lbnQuanMiLCJzcmNcXGNvbXBvbmVudHNcXHNjcmlwdGVkaXRvcmxheW91dC5jb21wb25lbnQuanMiLCJzcmNcXGNvbXBvbmVudHNcXHNjcmlwdGVkaXRvcm1lbnUuY29tcG9uZW50LmpzIiwic3JjXFxpbmRleC5qcyIsInNyY1xcc2VydmljZXNcXGdhbWUuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7a0JDQUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7SUFRYSxPLFdBQUEsTyxXQU5aLHFCQUFVO0FBQ1AsY0FBVSxVQURIO0FBRVA7QUFGTyxDQUFWLEMsZ0JBT0csaUJBQVksV0FBWixFQUFvQztBQUFBOztBQUNoQyxZQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsU0FBSyxX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b290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIiLCIvL3NldHVwIGNvbXBvbmVudCBtYWluIHBhZ2UgaHRtbFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbmltcG9ydCB7R2FtZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZ2FtZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCAnLi9iYWJ5bG9uLm1pbi5qcyc7XHJcblxyXG5pbXBvcnQgJy4vanF1ZXJ5Lm1pbi5qcyc7XHJcbmltcG9ydCAnLi9qcXVlcnktdWkubWluLmpzJztcclxuaW1wb3J0ICcuL2pxdWVyeS5sYXlvdXQubWluLmpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYWluLWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGdhbWVlZGl0b3I+PC9nYW1lZWRpdG9yPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lc2VydmljZTpHYW1lU2VydmljZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZXNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuZ2FtZXNlcnZpY2UgPSBnYW1lc2VydmljZTtcclxuICAgIH1cclxufVxyXG4iLCIvL3NldHVwIGFwcFxyXG5cclxuLy9pbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBJbnB1dCwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbi8vaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbi8vaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbmltcG9ydCB7QWNlRWRpdG9yRGlyZWN0aXZlLCBBY2VFZGl0b3JDb21wb25lbnR9IGZyb20gJ25nMi1hY2UtZWRpdG9yJztcclxuXHJcbmltcG9ydCB7IE1haW5BcHAgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHtBc3NldHNMaXN0fSBmcm9tICcuL2NvbXBvbmVudHMvYXNzZXRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2NlbmVMaXN0fSBmcm9tICcuL2NvbXBvbmVudHMvc2NlbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHtPYmplY3Rwcm9wc30gZnJvbSAnLi9jb21wb25lbnRzL29iamVjdHByb3BzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R2FtZUVkaXRvcn0gZnJvbSAnLi9jb21wb25lbnRzL2dhbWVlZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb2RlRWRpdG9yfSBmcm9tICcuL2NvbXBvbmVudHMvY29kZWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NjcmlwdEVkaXRvckV4cGxvcmV9IGZyb20gJy4vY29tcG9uZW50cy9zY3JpcHRlZGl0b3JleHBsb3JlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2NyaXB0RWRpdG9yTGF5b3V0fSBmcm9tICcuL2NvbXBvbmVudHMvc2NyaXB0ZWRpdG9ybGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2NyaXB0RWRpdG9yTWVudX0gZnJvbSAnLi9jb21wb25lbnRzL3NjcmlwdGVkaXRvcm1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHtFZGl0b3JNZW51fSBmcm9tICcuL2NvbXBvbmVudHMvZWRpdG9ybWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0VkaXRvclBhbmVsfSBmcm9tICcuL2NvbXBvbmVudHMvZWRpdG9ycGFuZWwuY29tcG9uZW50JztcclxuXHJcblxyXG5pbXBvcnQge05hdk1lbnV9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7R2FtZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZ2FtZS5zZXJ2aWNlJztcclxuXHJcbi8vY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgIC8veyBwYXRoOiAnJywgY29tcG9uZW50OiBIZWxsbyB9LFxyXG4gICAgLy97IHBhdGg6ICdjaWFvLzpuYW1lJywgY29tcG9uZW50OiBDaWFvIH0sXHJcbi8vXSk7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNYWluQXBwLFxyXG4gICAgICAgIEFjZUVkaXRvckRpcmVjdGl2ZSxcclxuICAgICAgICBBY2VFZGl0b3JDb21wb25lbnQsXHJcbiAgICAgICAgR2FtZUVkaXRvcixcclxuICAgICAgICBOYXZNZW51LFxyXG4gICAgICAgIFNjcmlwdEVkaXRvckxheW91dCxcclxuICAgICAgICBTY2VuZUxpc3QsXHJcbiAgICAgICAgQXNzZXRzTGlzdCxcclxuICAgICAgICBTY3JpcHRFZGl0b3JNZW51LFxyXG4gICAgICAgIFNjcmlwdEVkaXRvckV4cGxvcmUsXHJcbiAgICAgICAgQ29kZUVkaXRvcixcclxuICAgICAgICBPYmplY3Rwcm9wcyxcclxuICAgICAgICBFZGl0b3JQYW5lbCxcclxuICAgICAgICBFZGl0b3JNZW51XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgR2FtZVNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBib290c3RyYXA6IFtNYWluQXBwXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtHYW1lU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhc3NldHMtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIEFzc2V0c1xyXG4gICAgICAgIDwhLS08YnV0dG9uIChjbGljayk9XCJyZWZyZXNoKClcIj5SZWZyZXNoPC9idXR0b24+LS0+XHJcbiAgICAgICAgPCEtLVxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJnYW1lc2VydmljZS5zY2VuZVwiPlxyXG4gICAgICAgICAgICA8YSAqbmdGb3I9XCJsZXQgb2JqIG9mIGdhbWVzZXJ2aWNlLnNjZW5lLmNoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+e3tvYmoubmFtZX19PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC0tPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXNzZXRzTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lc2VydmljZTpHYW1lU2VydmljZSl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhnYW1lc2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lc2VydmljZSA9IGdhbWVzZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlZnJlc2hcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lc2VydmljZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lLmNoaWxkcmVuWzBdKTtcclxuICAgIH1cclxufVxyXG4iLCIvL2FkZCBcIkFjZUVkaXRvckRpcmVjdGl2ZVwiIHRvIHlvdXIgbW9kdWxlcyBsaXN0XHJcblxyXG5pbXBvcnQgeyBBY2VFZGl0b3JEaXJlY3RpdmUgfSBmcm9tICduZzItYWNlLWVkaXRvcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb2RlZWRpdG9yLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBhY2UtZWRpdG9yXHJcbiAgICAgICBbdGV4dF09XCJ0ZXh0XCJcclxuICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxyXG4gICAgICAgW3JlYWRPbmx5XT1cImZhbHNlXCJcclxuICAgICAgIFthdXRvVXBkYXRlQ29udGVudF09XCJ0cnVlXCJcclxuICAgICAgICh0ZXh0Q2hhbmdlZCk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgIHN0eWxlPVwibWluLWhlaWdodDogMjAwcHg7IGhlaWdodDoxMDAlOyB3aWR0aDoxMDAlOyBvdmVyZmxvdzogYXV0bzttYXJnaW46IDA7cGFkZGluZyA6IDA7XCI+PC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2RlRWRpdG9yIHtcclxuICAgIHRleHQ6c3RyaW5nID0gXCJUZXN0XCI7XHJcbiAgICAvL29wdGlvbnM6YW55ID0ge21heExpbmVzOiAxMDAwLCBwcmludE1hcmdpbjogZmFsc2V9O1xyXG4gICAgb3B0aW9uczphbnkgPSB7IHByaW50TWFyZ2luOiBmYWxzZX07XHJcblxyXG4gICAgb25DaGFuZ2UoY29kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3IGNvZGVcIiwgY29kZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FtZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2dhbWUuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgJy4uL2JhYnlsb24ubWluLmpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdlZGl0b3JtZW51JyxcclxuICAgIHN0eWxlVXJsczogIFsnLi9jb21wb25lbnRzL2VkaXRvcm1lbnUuY29tcG9uZW50LmNzcyddLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDx1bD5cclxuICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCIgPlxyXG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5GaWxlPC9hPlxyXG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIiBzdHlsZT1cInotaW5kZXg6NVwiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJzY3JpcHRvcGVuc2NlbmUoKTtcIj5PcGVuIFNjZW5lPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJzY3JpcHRsb2Fkc2NlbmUoKTtcIj5Mb2FkIFNjZW5lPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJzY3JpcHRzYXZlc2NlbmUoKTtcIj5TYXZlIFNjZW5lPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJzY3JpcHRjbGVhcnNjZW5lKCk7XCI+Q2xlYXIgU2NlbmU8L2E+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cInNjcmlwdGRlbGV0ZXNjZW5lKCk7XCI+RGVsZXRlIFNjZW5lPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj5cclxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+RWRpdDwvYT5cclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgc3R5bGU9XCJ6LWluZGV4OjVcIj5cclxuICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwic2NyaXB0ZGVsZXRlb2JqZWN0KCk7XCI+RGVsZXRlIE9iamVjdDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuXHJcbiAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiPlxyXG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5Db21wb25lbnRzPC9hPlxyXG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIiBzdHlsZT1cInotaW5kZXg6NVwiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJhZGRjdWJlKCk7XCIgPkN1YmU8L2E+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cImFkZHNwc2hlcmUoKTtcIj5TcGhlcmU8L2E+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cImFkZHNwbGFuZSgpO1wiPlBsYW5lPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJhZGRtZXNoKCk7XCI+TWVzaDwvYT5cclxuICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwiYWRkbWF0ZXJpYWwoKTtcIj5NYXRlcmlhbDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICAgIDwhLS1cclxuICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5QYWNrYWdlczwvYT5cclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgc3R5bGU9XCJ6LWluZGV4OjVcIj5cclxuICAgICAgPGEgaHJlZj1cIiNcIj5TY3JpcHRzPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPk1vZHM8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+SGVscDwvYT5cclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgc3R5bGU9XCJ6LWluZGV4OjVcIj5cclxuICAgICAgPGEgaHJlZj1cIiNcIj5Eb2NzPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI1wiPkFib3V0PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCIgKGNsaWNrKT1cInNjcmlwdGJ1aWxkKCk7XCI+QnVpbGQ8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiIChjbGljayk9XCJzY3JpcHRkZWJ1ZygpO1wiPkRlYnVnPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIiAoY2xpY2spPVwic2NyaXB0cGxheSgpO1wiPlBsYXk8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiIChjbGljayk9XCJzY3JpcHRzdG9wKCk7XCI+U3RvcDwvYT48L2xpPlxyXG4gICAgLS0+XHJcbiAgICA8L3VsPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdG9yTWVudSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZXNlcnZpY2U6R2FtZVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuZ2FtZXNlcnZpY2UgPSBnYW1lc2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRvcGVuc2NlbmUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjcmlwdG9wZW5zY2VuZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRsb2Fkc2NlbmUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjcmlwdGxvYWRzY2VuZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRzYXZlc2NlbmUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjcmlwdHNhdmVzY2VuZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRkZWxldGVzY2VuZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2NyaXB0ZGVsZXRlc2NlbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2NyaXB0Y2xlYXJzY2VuZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2NyaXB0Y2xlYXJzY2VuZVwiKTtcclxuICAgICAgICBpZih0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lICE9bnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBvYmpzY2VuZSA9IHRoaXMuZ2FtZXNlcnZpY2Uuc2NlbmU7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IG9ianNjZW5lLm1lc2hlcy5sZW5ndGg7IGkgPiAwIDtpLS0pe1xyXG4gICAgICAgICAgICAgICAgb2Jqc2NlbmUubWVzaGVzWzBdLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRkZWxldGVvYmplY3QoKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdzY3JpcHRkZWxldGVvYmplY3QnKTtcclxuICAgICAgICBpZih0aGlzLmdhbWVzZXJ2aWNlLnNlbGVjdG9iamVjdCAhPW51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVzZXJ2aWNlLnNlbGVjdG9iamVjdC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZXNlcnZpY2Uuc2VsZWN0b2JqZWN0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2NyaXB0YnVpbGQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2NyaXB0YnVpbGQnKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JpcHRkZWJ1Zygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzY3JpcHRkZWJ1ZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcmlwdHBsYXkoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2NyaXB0cGxheScpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcmlwdHN0b3AoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2NyaXB0c3RvcCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZGN1YmUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFkZGN1YmVcIik7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lc2VydmljZS5zY2VuZSAhPW51bGwpe1xyXG4gICAgICAgICAgICBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUJveCgnYm94MScsIHtoZWlnaHQ6MSx3aWR0aDoxLGRlcHRoOjF9LCB0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkc3BzaGVyZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkc3BzaGVyZVwiKTtcclxuICAgICAgICBpZih0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lICE9bnVsbCl7XHJcbiAgICAgICAgICAgIEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKCdzcGhlcmUxJywge2RpYW1ldGVyOjF9LCB0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkc3BsYW5lKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRzcGxhbmVcIik7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lc2VydmljZS5zY2VuZSAhPW51bGwpe1xyXG4gICAgICAgICAgICB2YXIgZ3JvdW5kID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUdyb3VuZCgnZ3JvdW5kMScsIDYsIDYsIDIsIHRoaXMuZ2FtZXNlcnZpY2Uuc2NlbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRtZXNoKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRtZXNoXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZG1hdGVyaWFsKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRtYXRlcmlhbCA+ID9cIik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZWRpdG9ycGFuZWwnLFxyXG4gICAgc3R5bGVVcmxzOiAgWycuL2NvbXBvbmVudHMvZWRpdG9ycGFuZWwuY29tcG9uZW50LmNzcyddLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OjMycHg7bWFyZ2luOjA7cGFkZGluZzowO1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT4gPGEgY2xhc3M9XCJkcm9wYnRuXCIgaHJlZj1cIiNcIj5TY3JpcHQ8L2E+IDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPiA8YSBjbGFzcz1cImRyb3BidG5cIiBocmVmPVwiI1wiPkNvbnNvbGU8L2E+IDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOjIwJTtoZWlnaHQ6MTAwJTtmbG9hdDpsZWZ0O21hcmdpbjowO3BhZGRpbmc6MDtcIj5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHRlZGl0b3JtZW51Pjwvc2NyaXB0ZWRpdG9ybWVudT5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHRlZGl0b3JleHBsb3JlPjwvc2NyaXB0ZWRpdG9yZXhwbG9yZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDo4MCU7aGVpZ2h0OjEwMCU7ZmxvYXQ6bGVmdDtcIj5cclxuICAgICAgICAgICAgICAgIDxjb2RlZWRpdG9yLWNvbXBvbmVudCBzdHlsZT1cIm1hcmdpbjowO3BhZGRpbmc6MDtcIj48L2NvZGVlZGl0b3ItY29tcG9uZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRvclBhbmVsIHtcclxuXHJcbn1cclxuIiwiLy9zZXR1cCBhcHBcclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIElucHV0LCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuaW1wb3J0IHtHYW1lU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvZ2FtZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCAnLi4vYmFieWxvbi5taW4uanMnO1xyXG5cclxuaW1wb3J0ICcuLi9qcXVlcnkubWluLmpzJztcclxuaW1wb3J0ICcuLi9qcXVlcnktdWkubWluLmpzJztcclxuaW1wb3J0ICcuLi9qcXVlcnkubGF5b3V0Lm1pbi5qcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ2FtZWVkaXRvcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGVkaXRvcm1lbnU+PC9lZGl0b3JtZW51PlxyXG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIHN0eWxlPVwiaGVpZ2h0OjEwMCU7XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWxheW91dC1jZW50ZXJcIiBzdHlsZT1cIm1hcmdpbjogMDtwYWRkaW5nIDogMDtcIj5cclxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cInJlbmRlckNhbnZhc1wiPjwvY2FudmFzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1sYXlvdXQtbm9ydGhcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpLWxheW91dC1zb3V0aFwiIHN0eWxlPVwibWFyZ2luOiAwO3BhZGRpbmcgOiAwO1wiPlxyXG4gICAgICAgICAgICA8ZWRpdG9ycGFuZWw+PC9lZGl0b3JwYW5lbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LWVhc3RcIj5cclxuICAgICAgICAgICAgPHNjZW5lLWxpc3Q+PC9zY2VuZS1saXN0PlxyXG4gICAgICAgICAgICA8b2JqZWN0cHJvcHM+PC9vYmplY3Rwcm9wcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWktbGF5b3V0LXdlc3RcIj5cclxuICAgICAgICAgICAgPGFzc2V0cy1saXN0PjwvYXNzZXRzLWxpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbWVFZGl0b3IgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgc2NlbmUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWVzZXJ2aWNlOkdhbWVTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLmdhbWVzZXJ2aWNlID0gZ2FtZXNlcnZpY2U7XHJcbiAgICAgICAgLy92YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT57XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJsb2FkZWQ/XCIpO1xyXG4gICAgICAgICAgICAvL3NlbGYuaW5pdCgpO1xyXG4gICAgICAgIC8vfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbml0IGxheW91dCFcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBfbGF5b3V0KCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBfbGF5b3V0KCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICQoJyNjb250YWluZXInKS5sYXlvdXQoe1xyXG4gICAgICAgICAgICByZXNpemFibGU6dHJ1ZSxcclxuICAgICAgICAgICAgb25yZXNpemU6KCk9PntcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXNpemVcIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlc2l6ZWNhbnZhcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGxheW91dCA9ICQoJyNjb250YWluZXInKS5sYXlvdXQoKTtcclxuICAgICAgICBsYXlvdXQuc2l6ZVBhbmUoXCJzb3V0aFwiLCAyNTApO1xyXG4gICAgICAgIGxheW91dC50b2dnbGUoXCJub3J0aFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNpemVjYW52YXMoKXtcclxuICAgICAgICBpZigodGhpcy5zY2VuZSAhPSBudWxsKSl7XHJcbiAgICAgICAgICAgIHZhciBsYXlvdXQgPSAkKCcjY29udGFpbmVyJykubGF5b3V0KCk7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aCAgICAgPSBsYXlvdXQuc3RhdGUuY2VudGVyLmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgICAgID0gbGF5b3V0LnN0YXRlLmNlbnRlci5pbm5lckhlaWdodDtcclxuICAgICAgICAgICAgLy90aGlzLmNhbWVyYS5hc3BlY3QgPSB3aWR0aCAvIGhlaWdodDtcclxuICAgICAgICAgICAgLy90aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5yZW5kZXJlci5zZXRTaXplKCB3aWR0aCxoZWlnaHQgKTtcclxuICAgICAgICAgICAgLy90aGlzLnNjZW5lLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zY2VuZS5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXNpemVcIik7XHJcbiAgICAgICAgICAgIGxheW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIHdpZHRoID0gbnVsbDtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIGdldCB0aGUgY2FudmFzIERPTSBlbGVtZW50XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW5kZXJDYW52YXMnKTtcclxuXHJcbiAgICAgICAgLy8gbG9hZCB0aGUgM0QgZW5naW5lXHJcbiAgICAgICAgdmFyIGVuZ2luZSA9IG5ldyBCQUJZTE9OLkVuZ2luZShjYW52YXMsIHRydWUpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGVTY2VuZSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYW5kIHJldHVybiB0aGUgc2NlbmVcclxuICAgICAgICB2YXIgY3JlYXRlU2NlbmUgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBiYXNpYyBCSlMgU2NlbmUgb2JqZWN0XHJcbiAgICAgICAgICAgIHZhciBzY2VuZSA9IG5ldyBCQUJZTE9OLlNjZW5lKGVuZ2luZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBGcmVlQ2FtZXJhLCBhbmQgc2V0IGl0cyBwb3NpdGlvbiB0byAoeDowLCB5OjUsIHo6LTEwKVxyXG4gICAgICAgICAgICB2YXIgY2FtZXJhID0gbmV3IEJBQllMT04uRnJlZUNhbWVyYSgnY2FtZXJhMScsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgNSwtMTApLCBzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0YXJnZXQgdGhlIGNhbWVyYSB0byBzY2VuZSBvcmlnaW5cclxuICAgICAgICAgICAgY2FtZXJhLnNldFRhcmdldChCQUJZTE9OLlZlY3RvcjMuWmVybygpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGF0dGFjaCB0aGUgY2FtZXJhIHRvIHRoZSBjYW52YXNcclxuICAgICAgICAgICAgY2FtZXJhLmF0dGFjaENvbnRyb2woY2FudmFzLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBiYXNpYyBsaWdodCwgYWltaW5nIDAsMSwwIC0gbWVhbmluZywgdG8gdGhlIHNreVxyXG4gICAgICAgICAgICB2YXIgbGlnaHQgPSBuZXcgQkFCWUxPTi5IZW1pc3BoZXJpY0xpZ2h0KCdsaWdodDEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsMSwwKSwgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgYnVpbHQtaW4gXCJzcGhlcmVcIiBzaGFwZTsgaXRzIGNvbnN0cnVjdG9yIHRha2VzIDUgcGFyYW1zOiBuYW1lLCB3aWR0aCwgZGVwdGgsIHN1YmRpdmlzaW9ucywgc2NlbmVcclxuICAgICAgICAgICAgdmFyIHNwaGVyZSA9IEJBQllMT04uTWVzaC5DcmVhdGVTcGhlcmUoJ3NwaGVyZTEnLCAxNiwgMiwgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSB0aGUgc3BoZXJlIHVwd2FyZCAxLzIgb2YgaXRzIGhlaWdodFxyXG4gICAgICAgICAgICBzcGhlcmUucG9zaXRpb24ueSA9IDE7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBidWlsdC1pbiBcImdyb3VuZFwiIHNoYXBlOyBpdHMgY29uc3RydWN0b3IgdGFrZXMgdGhlIHNhbWUgNSBwYXJhbXMgYXMgdGhlIHNwaGVyZSdzIG9uZVxyXG4gICAgICAgICAgICB2YXIgZ3JvdW5kID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUdyb3VuZCgnZ3JvdW5kMScsIDYsIDYsIDIsIHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgY3JlYXRlZCBzY2VuZVxyXG4gICAgICAgICAgICByZXR1cm4gc2NlbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYWxsIHRoZSBjcmVhdGVTY2VuZSBmdW5jdGlvblxyXG4gICAgICAgIHZhciBzY2VuZSA9IGNyZWF0ZVNjZW5lKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lID0gc2NlbmU7XHJcblxyXG4gICAgICAgIC8vIHJ1biB0aGUgcmVuZGVyIGxvb3BcclxuICAgICAgICBlbmdpbmUucnVuUmVuZGVyTG9vcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzY2VuZS5yZW5kZXIoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhlIGNhbnZhcy93aW5kb3cgcmVzaXplIGV2ZW50IGhhbmRsZXJcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZW5naW5lLnJlc2l6ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhbWVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9nYW1lLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0ICcuLi9iYWJ5bG9uLm1pbi5qcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmF2bWVudScsXHJcbiAgICBzdHlsZVVybHM6ICBbJy4vY29tcG9uZW50cy9uYXZtZW51LmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCIgPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+RmlsZTwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiei1pbmRleDo1XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPk9wZW4gU2NlbmU8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkxvYWQgU2NlbmU8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlNhdmUgU2NlbmU8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiICAoY2xpY2spPVwiY2xlYXJzY2VuZSgpO1wiPkNsZWFyIFNjZW5lPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5EZWxldGUgU2NlbmU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+RWRpdDwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiei1pbmRleDo1XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkRlbGV0ZSBPYmplY3Q8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiPkNvbXBvbmVudHM8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIiBzdHlsZT1cInotaW5kZXg6NVwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwiYWRkY3ViZSgpO1wiID5DdWJlPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5TcGhlcmU8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlBsYW5lPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5NZXNoPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5NYXRlcmlhbDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5QYWNrYWdlczwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiei1pbmRleDo1XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlNjcmlwdHM8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPk1vZHM8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+SGVscDwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiei1pbmRleDo1XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkRvY3M8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkFib3V0PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wYnRuXCI+QnVpbGQ8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5EZWJ1ZzwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGJ0blwiPlBsYXk8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3BidG5cIj5TdG9wPC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdk1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZXNlcnZpY2U6R2FtZVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuZ2FtZXNlcnZpY2UgPSBnYW1lc2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcnNjZW5lKCl7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lc2VydmljZS5zY2VuZSAhPW51bGwpe1xyXG4gICAgICAgICAgICB2YXIgb2Jqc2NlbmUgPSB0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lO1xyXG4gICAgICAgICAgICB3aGlsZSAob2Jqc2NlbmUuY2hpbGRyZW4ubGVuZ3RoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvYmpzY2VuZS5yZW1vdmUob2Jqc2NlbmUuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZGN1YmUoKXtcclxuICAgICAgICBpZih0aGlzLmdhbWVzZXJ2aWNlLnNjZW5lICE9bnVsbCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3ViZVwiKTtcclxuICAgICAgICAgICAgdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxLCAxLCAxICk7XHJcbiAgICBcdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweDAwZmZmZiB9ICk7XHJcbiAgICBcdFx0dmFyIGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcbiAgICAgICAgICAgIGN1YmUubmFtZSA9IFwiY3ViZVwiO1xyXG4gICAgXHRcdHRoaXMuZ2FtZXNlcnZpY2Uuc2NlbmUuYWRkKCBjdWJlICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dhbWVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9nYW1lLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ29iamVjdHByb3BzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDo1MCU7d2lkdGg6MTAwJVwiPlxyXG4gICAgICAgICAgICBQcm9wczpcclxuICAgICAgICAgICAgPCEtLTxidXR0b24gKGNsaWNrKT1cInJlZnJlc2goKVwiPlJlZnJlc2g8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImdhbWVzZXJ2aWNlLnNlbGVjdG9iamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0OiB7e2dhbWVzZXJ2aWNlLnNlbGVjdG9iamVjdC5pZH19PGJ1dHRvbiAoY2xpY2spPVwibWVzaGRlbGV0ZSgpXCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnI+PGxhYmVsPnB4OjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmctbW9kZWw9J3ZhbCB8IG51bWJlcjogMicgW25nTW9kZWxdPVwiZ2FtZXNlcnZpY2Uuc2VsZWN0b2JqZWN0LnBvc2l0aW9uLnhcIiB2YWx1ZT1cInt7Z2FtZXNlcnZpY2Uuc2VsZWN0b2JqZWN0LnBvc2l0aW9uLnh9fVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9ianBvc3goJGV2ZW50KVwiIHN0ZXAgPVwiMC4wMDAwMDFcIiAvPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8YnI+PGxhYmVsPnB5OjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgW25nTW9kZWxdPVwiZ2FtZXNlcnZpY2Uuc2VsZWN0b2JqZWN0LnBvc2l0aW9uLnlcIiB2YWx1ZT1cInt7Z2FtZXNlcnZpY2Uuc2VsZWN0b2JqZWN0LnBvc2l0aW9uLnl9fVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9ianBvc3koJGV2ZW50KVwiIHN0ZXAgPVwiMC4wMDAwMDFcIiAvPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8YnI+PGxhYmVsPnB6OjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgW25nTW9kZWxdPVwiZ2FtZXNlcnZpY2Uuc2VsZWN0b2JqZWN0LnBvc2l0aW9uLnpcIiB2YWx1ZT1cInt7Z2FtZXNlcnZpY2Uuc2VsZWN0b2JqZWN0LnBvc2l0aW9uLnp9fVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9ianBvc3ooJGV2ZW50KVwiIHN0ZXAgPVwiMC4wMDAwMDFcIiAvPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT2JqZWN0cHJvcHMge1xyXG4gICAgcG9zeCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZXNlcnZpY2U6R2FtZVNlcnZpY2Upe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZ2FtZXNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuZ2FtZXNlcnZpY2UgPSBnYW1lc2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBvYmpwb3N4KHZhbHVlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwb3MgeFwiKTtcclxuICAgICAgICBpZih0aGlzLmdhbWVzZXJ2aWNlLnNlbGVjdG9iamVjdCAhPW51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVzZXJ2aWNlLnNlbGVjdG9iamVjdC5wb3NpdGlvbi54ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9ianBvc3kodmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBvcyB5XCIpO1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZXNlcnZpY2Uuc2VsZWN0b2JqZWN0ICE9bnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZXNlcnZpY2Uuc2VsZWN0b2JqZWN0LnBvc2l0aW9uLnkgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2JqcG9zeih2YWx1ZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicG9zIHpcIik7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lc2VydmljZS5zZWxlY3RvYmplY3QgIT1udWxsKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lc2VydmljZS5zZWxlY3RvYmplY3QucG9zaXRpb24ueiA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXNoZGVsZXRlKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGVcIik7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lc2VydmljZS5zZWxlY3RvYmplY3QgIT1udWxsKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lc2VydmljZS5zZWxlY3RvYmplY3QuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVzZXJ2aWNlLnNlbGVjdG9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVmcmVzaFwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2FtZXNlcnZpY2UpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5nYW1lc2VydmljZS5zY2VuZS5jaGlsZHJlblswXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FtZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2dhbWUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2NlbmUtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6NTAlO3dpZHRoOjEwMCVcIj5cclxuICAgICAgICAgICAgU2NlbmVcclxuICAgICAgICAgICAgPCEtLTxidXR0b24gKGNsaWNrKT1cInJlZnJlc2goKVwiPlJlZnJlc2g8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImdhbWVzZXJ2aWNlLnNjZW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IG9iaiBvZiBnYW1lc2VydmljZS5zY2VuZS5tZXNoZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKGNsaWNrKT1cInNlbGVjdG9iamVjdChvYmopXCI+e3tvYmoubmFtZX19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNjZW5lTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lc2VydmljZTpHYW1lU2VydmljZSl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhnYW1lc2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lc2VydmljZSA9IGdhbWVzZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdG9iamVjdChfb2JqKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjZW5lIG9iamVjdCBzZWxlY3RlZDpcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coX29iaik7XHJcbiAgICAgICAgdGhpcy5nYW1lc2VydmljZS5zZWxlY3RvYmplY3QgPSBfb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlZnJlc2hcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lc2VydmljZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lc2VydmljZS5zY2VuZS5tZXNoZXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NjcmlwdGVkaXRvcmV4cGxvcmUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cclxuICAgICAgICBQYW5lbCBkaXJlY3RvcnkgZm9sZGVyXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY3JpcHRFZGl0b3JFeHBsb3JlIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2NyaXB0ZWRpdG9ybGF5b3V0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDoxMDAlO3dpZHRoOjEwMCU7XCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDoyMCU7aGVpZ2h0OjEwMCU7ZmxvYXQ6bGVmdDttYXJnaW46MDtwYWRkaW5nOjA7XCI+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0ZWRpdG9ybWVudT48L3NjcmlwdGVkaXRvcm1lbnU+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0ZWRpdG9yZXhwbG9yZT48L3NjcmlwdGVkaXRvcmV4cGxvcmU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6ODAlO2hlaWdodDoxMDAlO2Zsb2F0OmxlZnQ7XCI+XHJcbiAgICAgICAgICAgIDxjb2RlZWRpdG9yLWNvbXBvbmVudCBzdHlsZT1cIm1hcmdpbjowO3BhZGRpbmc6MDtcIj48L2NvZGVlZGl0b3ItY29tcG9uZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNjcmlwdEVkaXRvckxheW91dCB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NjcmlwdGVkaXRvcm1lbnUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICBBY3Rpb25cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJTY3JpcHRSZWxvYWQoKTtcIj5SZWxvYWQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJTY3JpcHRTYXZlKCk7XCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIlNjcmlwdFJ1bigpO1wiPlJ1bjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIlNjcmlwdENyZWF0ZSgpO1wiPkNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cIlNjcmlwdERlbGV0ZSgpO1wiPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2NyaXB0RWRpdG9yTWVudSB7XHJcblxyXG4gICAgU2NyaXB0UmVsb2FkKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1JlbG9hZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIFNjcmlwdFNhdmUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2F2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIFNjcmlwdFJ1bigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSdW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBTY3JpcHREZWxldGUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgU2NyaXB0Q3JlYXRlKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZScpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vbWFpbiBlbnRyeSBhbmQgc2V0dXAgYm9vdFxyXG5cclxuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XHJcbmltcG9ydCAnem9uZS5qcy9kaXN0L3pvbmUnO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdhbWVTZXJ2aWNlIHtcclxuXHJcbiAgICBzY2VuZSA9IG51bGw7XHJcbiAgICBzZWxlY3RvYmplY3QgPSBudWxsO1xyXG5cclxufVxyXG4iXX0=