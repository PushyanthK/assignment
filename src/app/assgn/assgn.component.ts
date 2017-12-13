import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assgn',
  templateUrl: './assgn.component.html',
  styleUrls: ['./assgn.component.css']
})
export class AssgnComponent implements OnInit {

  values = '';
  message = '';
  message2 = '';
  constructor() { }

  assgnClass = {
    'alignText': true,
    'textColor': true
  };

  assgnStyle = {
    'color' : '#f7a11d',
    'font-size' : '16px'
  };

  ngOnInit() {
  }

  onKey(event: any) { // without type info
    this.values += event.target.value + ' & ';
  }
  clickMessage() {
    this.message = 'You clicked this button! BAKA! Now this message is not gonna disappear!';
  }
  disMessage() {
    this.message2 = (this.message2 === '') ? 'You can make me disappear!' : '';
  }
}
