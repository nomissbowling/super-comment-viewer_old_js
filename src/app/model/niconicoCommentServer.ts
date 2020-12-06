import {ConnectCommentServer} from './connectCommentServer';
import {UserInfoModel} from '../userInfoModel';
import {HttpClient} from '@angular/common/http';

export class NiconicoCommentServer extends ConnectCommentServer{
  constructor(private client: HttpClient) {
    super();
  }
  convertToUserInfoModel(response: string): UserInfoModel {
    return new UserInfoModel('', '', '');
  }

  extractWebsocketUrl(): Promise<string> {
    return Promise.resolve('');
  }

  fetchCommentAsync(url: string): Promise<string> {
    return Promise.resolve('');
  }

}
