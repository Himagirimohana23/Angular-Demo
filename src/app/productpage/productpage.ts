import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {DomSanitizer} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {Productpageservice} from '../productpageservice';
import {CurrencyWithScalePipe} from '../shared/pipes/currency-with-scale-pipe';
import {SignedNumberPipe} from '../shared/pipes/signed-number-pipe';


@Component({
  selector: 'app-productpage',
  imports: [MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule, MatChipsModule, CommonModule, CurrencyWithScalePipe, SignedNumberPipe],
  templateUrl: './productpage.html',
  styleUrl: './productpage.css'
})

export class Productpage implements OnInit {
  data: any;
  cards_data: {
    card_id: number;
    icon_name: string;
    change_rate: number;
    customer_type: string;
    metric_value: any;
  }[] = [];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private productService: Productpageservice) {
    this.matIconRegistry.addSvgIcon(
      'users', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/users.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'dollar-sign', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/dollar-sign.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'target', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/target.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'star', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/star.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'alert-triangle', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/alert-triangle.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'trending-up', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/trending-up.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'trending-down', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/trending-down.svg')
    );

  }

  ngOnInit() {
    this.productService.postData().subscribe(
      (response) => {
        this.cards_data = [
          {
            card_id: 1,
            icon_name: "users",
            change_rate: +8.5,
            customer_type: 'Total Customers',
            metric_value: response.totCustCnt
          },
          {
            card_id: 2,
            icon_name: "dollar-sign",
            change_rate: -2.5,
            customer_type: "AUM",
            metric_value: response.totAUMVal
          },
          {
            card_id: 3,
            icon_name: "target",
            change_rate: +10.2,
            customer_type: "Avg AUM / Client",
            metric_value: response.avgAUMVal
          },
          {
            card_id: 4,
            icon_name: "star",
            change_rate: -5.8,
            customer_type: "VIP Customers",
            metric_value: response.VIPCnt
          },
          {
            card_id: 5,
            icon_name: "alert-triangle",
            change_rate: -5.8,
            customer_type: "Zero Wealth Customers",
            metric_value: "09"
          }
        ]
      }
    );
  }
}
