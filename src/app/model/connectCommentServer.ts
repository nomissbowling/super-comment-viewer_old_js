import {UserInfoModel} from '../userInfoModel';

export abstract class ConnectCommentServer{

  async * startFetchCommentAsync(): object{
    const url =  await this.extractWebsocketUrl();
    const response = this.fetchCommentAsync(url);
    const r =  await response;
    yield this.convertToUserInfoModel(r);
  }

  abstract extractWebsocketUrl(): Promise<string>;
  abstract fetchCommentAsync(url: string): Promise<string>;
  abstract convertToUserInfoModel(response: string): UserInfoModel;

}
