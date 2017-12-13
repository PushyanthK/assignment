import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  assgn: String = 'Assgn';
  oneway = 'onevalue';
  title = 'Angular';
  assgnArr = [
    {
      name: 'Pushyanth',
      empNo: 222,
      gender: 'male'
    },
    {
      name: 'Kalyan',
      empNo: 224,
      gender: 'male'
    },
    {
      name: 'Sandeep',
      empNo: 236,
      gender: 'male'
    }
  ];
}
