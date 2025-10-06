import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Productpageservice {
  constructor(private http: HttpClient) {
  }


  postData() : Observable<any>{
    let customer_data = {
      "brCd" : "BR0001",
      "busdate" : "22-Feb-2025",
      "rmId": "Ishaan"
    }
    return this.http.post('https://wealthforce-sit.intellectseec.io/DashboardServices/dashboard/getRMMobMySpaceDtls', customer_data);
  }


  postMeetingData() : Observable<any>{
    let calendar_data = {
      "brCd" : "BR0001",
      "makerId": "Ishaan",
      "strFrom": "inbox",
      "gridCount":"0",
      "page":"1",
      "start":"0",
      "limit": "19"
    }
    return this.http.post('https://wealthforce-sit.intellectseec.io/MeetingServices/topnav/getCalendarDetails', calendar_data);
  }



}
