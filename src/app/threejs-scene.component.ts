import { Component, ElementRef, OnInit, OnDestroy, signal, viewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-threejs-scene',
  standalone: true,
  template: `
    <div #sceneContainer class="scene-container"></div>
  `,
  styles: [`
    .scene-container {
      width: 100%;
      height: 400px;
      display: block;
    }
  `]
})
export class ThreejsSceneComponent implements OnInit, OnDestroy {
  private readonly sceneContainer = viewChild.required<ElementRef<HTMLDivElement>>('sceneContainer');
  
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private renderer?: THREE.WebGLRenderer;
  private cube?: THREE.Mesh;
  private animationId?: number;
  
  readonly isRendering = signal(false);

  ngOnInit(): void {
    this.initThreeJS();
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  private initThreeJS(): void {
    const container = this.sceneContainer().nativeElement;
    
    // Create scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f0f0);
    
    // Create camera
    const width = container.clientWidth;
    const height = container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;
    
    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
    container.appendChild(this.renderer.domElement);
    
    // Create a cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00ff00,
      wireframe: true
    });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    
    // Start animation
    this.isRendering.set(true);
    this.animate();
  }

  private animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);
    
    if (this.cube) {
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
    }
    
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  };
}
