import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Result } from './result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  redditresults: Result[] = [];

  reddit = null;


  http: HttpClient = null;

  constructor(http: HttpClient) {

    this.http = http;
    this.loadPRData();
    //http.get<Result[]>('https://www.reddit.com/r/aww/.json').subscribe(results => {
    //  console.log(results);
    //  this.redditresults = results;
    //}, error => {

    //  console.log(error);
    //});

  }
  loadPRData() {

    // alert('Load SW Data'); Add this as a quick test to make sure we're calling the right function

    this.http.get<any>('https://www.reddit.com/r/aww/.json').subscribe(result => {
      console.log(result);
      this.reddit = result;
      // this.thetasks = result;
    }, error => {
      console.log(error);
    });

  }


}
