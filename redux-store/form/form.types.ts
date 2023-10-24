interface formDetail {
  id: number;
  fullName: string;
  email: string;
  number: string;
  country: string;
  gender: string;
  courses: string;
  createdAt:any;
  approved: boolean;
}

export interface IformState {
  form?: any;
  singleForm?: formDetail;
  numberOfPages?: number;
  count?: number;
  formSuccessMesssage: string;
  formError?: any;
  isFormActivityInProgress?: boolean;
}
