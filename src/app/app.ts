import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Productpage} from './productpage/productpage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Productpage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularDemo');
}
