import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-detailed-view',
  imports: [MatExpansionModule, MatIconModule],
  templateUrl: './detailed-view.html',
  styleUrl: './detailed-view.css'
})
export class DetailedView {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'calendar_icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/calendar.svg')
    );

    this.matIconRegistry.addSvgIcon(
      "alert-circle", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/alert-circle.svg')
    );

    this.matIconRegistry.addSvgIcon(
      "check-circle", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/check-circle.svg')
    );

    this.matIconRegistry.addSvgIcon(
      "target", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/target.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "camp-check-circle", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/check-circle.svg')
    );
  }

  detailedViewList:{ icon_name:string, panel_title:string, badge_value:number, panel_description:string }[] = [
    {
      icon_name: "calendar_icon",
      panel_title: "Meetings",
      badge_value: 5,
      panel_description: "There are 5 scheduled meetings in which you are included."
    },
    {
      icon_name: "alert-circle",
      panel_title: "Service Requests",
      badge_value: 4,
      panel_description: "There are total 4 new service requests are opened"
    },
    {
      icon_name: "check-circle",
      panel_title: "To Do List",
      badge_value: 5,
      panel_description: "There are 5 requests in the TO Do List"
    },
    {
      icon_name: "target",
      panel_title: "Opportunities",
      badge_value: 4,
      panel_description: "There are 4 new opportunities are added for the role in which you are part of the team"
    },
    {
      icon_name: "camp-check-circle",
      panel_title: "Campaigns",
      badge_value: 4,
      panel_description: "There are 4 Campaigns running in the current month"
    }
  ];

}
