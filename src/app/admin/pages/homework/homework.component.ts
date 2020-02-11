import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

  public cDate: Date;

  constructor() { 
    this.cDate = new Date();
  }

  ngOnInit() {
  }

}
