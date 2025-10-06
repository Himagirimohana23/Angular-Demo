import { Component } from '@angular/core';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-course-card',
  imports: [MatButtonModule, MatIconModule,MatCardModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  courseCardList:{ course_id : number, course_label: string, course_name : string, course_description : string, course_time: number, course_date: string, course_views: number, background_image:string }[] = [
    {
      course_id: 1,
      course_label: "Technology",
      course_name: "Insight into the Tech Industry",
      course_description: "Exploring emerging technologies and their impact on global markets. This section provides an overview of trends and advancements in the ",
      course_time: 5,
      course_date: "Aug 15, 2024",
      course_views: 1245,
      background_image: ""
    },
    {
      course_id: 2,
      course_label: "Stocks",
      course_name: "The future of Renewable Energy",
      course_description: "Analyzing the latest innovations in renewable energy sources and their role in combating climate change.",
      course_time: 7,
      course_date: "Aug 10, 2024",
      course_views: 892,
      background_image: ""
    },
    {
      course_id: 3,
      course_label: "Markets",
      course_name: "Advancements in Artificial Intelligence",
      course_description: "Discussing the latest breakthroughs in AI technology and its implications for various industries.",
      course_time: 6,
      course_date: "Aug 17, 2024",
      course_views: 2103,
      background_image: ""
    },
    {
      course_id: 4,
      course_label: "Industries",
      course_name: "Cybersecurity Trends",
      course_description: "Reviewing current threats and the evolving landscape of cybersecurity practices for businesses.",
      course_time: 4,
      course_date: "Aug 12, 2024",
      course_views: 567,
      background_image: ""
    }
  ];

}
