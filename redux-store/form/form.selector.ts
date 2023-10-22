import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { IformState } from "./form.types";

const selectDomain = (state: any) => state.formReducer;

export const allForm = createDraftSafeSelector(
  selectDomain,
  (FormData: IformState) => FormData.form,
);

export const singleForm = createDraftSafeSelector(
  selectDomain,
  (FormData: IformState) => FormData.singleForm,
);

export const numberOfPages = createDraftSafeSelector(
  selectDomain,
  (FormData: IformState) => FormData.numberOfPages,
);

export const count = createDraftSafeSelector(
  selectDomain,
  (FormData: IformState) => FormData.count,
);

export const formSuccessMessage = createDraftSafeSelector(
  selectDomain,
  (FormData: IformState) => FormData.formSuccessMesssage,
);

export const formError = createDraftSafeSelector(
  selectDomain,
  (FormData: IformState) => FormData.formError,
);

export const formActivityInProcess = createDraftSafeSelector(
  selectDomain,
  (FormData: IformState) => FormData.isFormActivityInProgress,
);
