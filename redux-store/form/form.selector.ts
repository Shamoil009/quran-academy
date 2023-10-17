import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { IformState } from "./form.types";

const selectDomain = (state: any) => state.companyReducer;

export const form = createDraftSafeSelector(
  selectDomain,
  (form: IformState) => form.form,
);

export const singleForm = createDraftSafeSelector(
  selectDomain,
  (form: IformState) => form.singleForm,
);

export const formSuccessMessage = createDraftSafeSelector(
  selectDomain,
  (form: IformState) => form.formSuccessMesssage,
);

export const formError = createDraftSafeSelector(
  selectDomain,
  (form: IformState) => form.formError,
);

export const formActivityInProcess = createDraftSafeSelector(
  selectDomain,
  (form: IformState) => form.isFormActivityInProgress,
);
