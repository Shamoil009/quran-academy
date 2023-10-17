import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { IauthState } from "./auth.types";

const selectDomain = (state: any) => state.authReducer;

export const userDetails = createDraftSafeSelector(
  selectDomain,
  (user: IauthState) => user.user
);

export const loginSuccessMessage = createDraftSafeSelector(
  selectDomain,
  (user: IauthState) => user.loginSuccessMesssage
);

export const error = createDraftSafeSelector(
  selectDomain,
  (user: IauthState) => user.error
);

export const activityInProcess = createDraftSafeSelector(
  selectDomain,
  (user: IauthState) => user.isActivityInProcess
);

export const isValidTokenMessage = createDraftSafeSelector(
  selectDomain,
  (user: IauthState) => user.isValidTokenMessage
);


