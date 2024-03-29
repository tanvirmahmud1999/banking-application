import React from "react";
import { useDispatch } from "react-redux";
import Login from "../../components/forms/userForms/Login";
import { resetAuthStatus } from "../../state/features/User/Auth/authSlice";
import { UseResetStatus } from "../../hooks/UseResetStatus";
import { ReactComponent as LoginImg } from "../../assets/imgs/E-BANK-Login.svg";

export const UserLoginPage = () => {
  const dispatch = useDispatch();

  //clean up  status (on mount, unmount)
  UseResetStatus(() => {
    dispatch(resetAuthStatus());
  });
  UseResetStatus(() => {
    return () => {
      dispatch(resetAuthStatus());
    };
  });

  return (
    <div className="min-h-screen max-w-7xl w-full mx-auto flex justify-center items-center flex-col lg:flex-row gap-4 p-4 md:p-10">
      <Login />

      <div className="w-[70%] self-stretch hidden lg:flex justify-center items-center flex-col p-6">
        <h2 className="w-full p-6 text-center text-3xl !font-sans font-bold text-teal-600 italic">
          E-bank is Everything You Need Now!
        </h2>
        <img src="https://www.comarch.com/files-com/file_611/grafika_banking.png" className="self-stretch mx-auto" />
      </div>
    </div>
  );
};
