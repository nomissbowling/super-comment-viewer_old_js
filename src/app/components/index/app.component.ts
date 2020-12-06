import {Component, OnInit} from '@angular/core';
import {UserInfoModel} from '../../userInfoModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  userInfo: UserInfoModel = new UserInfoModel('userName', 'userIcon', 'comment');
  constructor() {

  }

  ngOnInit(): void {
  }


}
