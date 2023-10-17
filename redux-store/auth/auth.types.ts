interface userDetail {
  id: number;
  email: string;
  password: string;
  fullName: string;
  isAdmin:boolean;
  
}

export interface IauthState {
  user?: userDetail;
  error?: any;
  isActivityInProcess?: boolean;
  loginSuccessMesssage: string;
  isValidTokenMessage?: string;

}
