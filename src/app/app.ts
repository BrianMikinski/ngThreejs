import { Component, signal } from '@angular/core';
import { ThreejsSceneComponent } from './threejs-scene.component';

@Component({
  selector: 'app-root',
  imports: [ThreejsSceneComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hello World - Angular 20 with Three.js');
}
