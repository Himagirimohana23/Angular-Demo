import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Productpage} from './productpage/productpage';
import {DetailedView} from './detailed-view/detailed-view';
import {CourseCard} from './course-card/course-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Productpage, DetailedView, CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularDemo');
}
