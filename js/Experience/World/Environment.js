import * as THREE from "three";
import Experience from "../Experience.js";

export default class Environment {
   constructor() {
      this.experience = new Experience();
      this.scene = this.experience.scene;

      this.obj = {
         colorObj: { r: 0, g: 0, b: 0 },
         intensity: 3,
      };

      this.setSunlight();
   }

   setSunlight() {
      this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
      this.sunLight.castShadow = true;
      this.sunLight.shadow.camera.far = 20;
      this.sunLight.shadow.mapSize.set(2048, 2048);
      this.sunLight.shadow.normalBias = 0.05;
      //const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
      this.scene.add(this.sunLight);

      this.sunLight.position.set(1.5, 7, 3);
      this.scene.add(this.sunLight);

      this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
      this.scene.add(this.ambientLight);
   }



   resize() { }

   update() { }
}
