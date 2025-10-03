import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-productpage',
  imports: [MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule, MatChipsModule],
  templateUrl: './productpage.html',
  styleUrl: './productpage.css'
})

export class Productpage {

}
