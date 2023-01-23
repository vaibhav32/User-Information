import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  currentActiveMenu: string = 'User-Info';
  currentDate: any;
  
  ngOnInit(): void {
    this.currentDate = new Date();

  }
  title = 'UserInformationApp';
  changeMenu(value:any) {
      this.currentActiveMenu = value;
  }
}

