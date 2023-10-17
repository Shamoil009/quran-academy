interface formDetail {
  id: number;
  fullName: string;
  email: string;
  number: string;
  country: string;
  gender: string;
  courses: string;
  approved: boolean;
}

export interface IformState {
  form?: formDetail[];
  singleForm?: formDetail;
  formSuccessMesssage:string;
  formError?: any;
  isFormActivityInProgress?: boolean;
}
