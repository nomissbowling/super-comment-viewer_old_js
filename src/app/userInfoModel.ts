export class UserInfoModel{
  constructor(private userName: string, private userIcon: string, private comment: string) {
  }
  getUserName(): string{
    return this.userName;
  }
  getUserIcon(): string{
    return this.userIcon;
  }
  getComment(): string{
    return this.comment;
  }
}
