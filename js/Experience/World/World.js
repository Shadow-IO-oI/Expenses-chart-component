import * as THREE from "three";
import Experience from "../Experience.js";

import Component from "./Component.js";
import Floor from "./Floor.js";
import Environment from "./Environment.js";

import { EventEmitter } from "events";

export default class World extends EventEmitter {
   constructor() {
      super();
      this.experience = new Experience();
      this.sizes = this.experience.sizes;
      this.scene = this.experience.scene;
      this.canvas = this.experience.canvas;
      this.camera = this.experience.camera;
      this.resources = this.experience.resources;

      this.resources.on("ready", () => {
         this.component = new Component();
         this.environment = new Environment();
         this.floor = new Floor();

         this.emit("worldready");
      });
   }



   resize() {
   }

   update() {
   }
}
