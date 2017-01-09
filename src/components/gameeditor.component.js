//setup app

import { NgModule, Component, Input, Attribute } from '@angular/core';
import 'rxjs/add/operator/map';

import {GameService} from '../services/game.service';

import '../babylon.min.js';

import '../jquery.min.js';
import '../jquery-ui.min.js';
import '../jquery.layout.min.js';

@Component({
    selector: 'gameeditor',
    template: `
    <editormenu></editormenu>
    <div id="container" style="height:100%;">
        <div class="ui-layout-center" style="margin: 0;padding : 0;">
            <canvas id="renderCanvas"></canvas>
        </div>
        <div class="ui-layout-north">

        </div>
        <div class="ui-layout-south" style="margin: 0;padding : 0;">
            <editorpanel></editorpanel>
        </div>
        <div class="ui-layout-east">
            <scene-list></scene-list>
            <objectprops></objectprops>
        </div>
        <div class="ui-layout-west">
            <assets-list></assets-list>
        </div>
    </div>
    `
})
export class GameEditor implements OnInit{

    scene = null;

    constructor(gameservice:GameService){
        this.gameservice = gameservice;
        //var self = this;
        //window.addEventListener('DOMContentLoaded', ()=>{
            //console.log("loaded?");
            //self.init();
        //});
    }

    ngOnInit(): void {
        console.log("init layout!");

        this.setup_layout();
        this.init();
    }

    setup_layout(){
        var self = this;
        $('#container').layout({
            resizable:true,
            onresize:()=>{
                //console.log("resize");
                self.resizecanvas();
            }
        });
        var layout = $('#container').layout();
        layout.sizePane("south", 250);
        layout.toggle("north");
    }

    resizecanvas(){
        if((this.scene != null)){
            var layout = $('#container').layout();
            var width     = layout.state.center.innerWidth;
            var height     = layout.state.center.innerHeight;
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

    init(){
        // get the canvas DOM element
        var canvas = document.getElementById('renderCanvas');

        // load the 3D engine
        var engine = new BABYLON.Engine(canvas, true);

        // createScene function that creates and return the scene
        var createScene = function(){
            // create a basic BJS Scene object
            var scene = new BABYLON.Scene(engine);

            // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
            var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);

            // target the camera to scene origin
            camera.setTarget(BABYLON.Vector3.Zero());

            // attach the camera to the canvas
            camera.attachControl(canvas, false);

            // create a basic light, aiming 0,1,0 - meaning, to the sky
            var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

            // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
            var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);

            // move the sphere upward 1/2 of its height
            sphere.position.y = 1;

            // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
            var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

            // return the created scene
            return scene;
        }

        // call the createScene function
        var scene = createScene();

        this.scene = scene;
        this.gameservice.scene = scene;

        // run the render loop
        engine.runRenderLoop(function(){
            scene.render();
        });

        // the canvas/window resize event handler
        window.addEventListener('resize', function(){
            engine.resize();
        });
    }
}
