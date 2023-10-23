"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { QA_TOKEN } from "@/utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { verifyToken, tokenCleaner } from "@/redux-store/auth/auth.slice";
// import { getUserDetails } from "@/redux-store/user/user.slice";
import { isValidTokenMessage } from "@/redux-store/auth/auth.selector";
import { AppDispatch } from "@/redux-store/store";
import { formsCleanUp } from "@/redux-store/form/form.slice";

type Props = {
  children: any;
};

const AuthGuard = ({ children }: Props) => {
  const [token, setToken] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const tokenValidOrNotMessage = useSelector(isValidTokenMessage);
  const [traceAuth, setTraceAuth] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(QA_TOKEN)) {
      setToken(false);
      router.push("/login");
    } else {
      //setTraceAuth(true);
      // Set traceAuth to true only when channel data is fetched
      dispatch(verifyToken()).then(() => {
        setTraceAuth(true);
      });
    }
  }, []);

  useEffect(() => {

    if (tokenValidOrNotMessage === "Token is invalid") {
      setToken(false);
      dispatch(tokenCleaner());
      dispatch(formsCleanUp())
      localStorage.removeItem(QA_TOKEN);
      router.push("/login");
     } 
    //else if (tokenValidOrNotMessage === "token is valid" && traceAuth) {
      // dispatch(getUserDetails());
    // }
  }, [tokenValidOrNotMessage]);

  return <>{token ? <>{children}</> : ""}</>;
};

export default AuthGuard;
