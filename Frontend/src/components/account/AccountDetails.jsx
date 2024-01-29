import moment from "moment";
import React from "react";
import { FcRating } from "react-icons/fc";

export const AccountDetails = ({ account }) => {
  return (
    <>



      <div className="w-full p-10 rounded-lg bg-blue-600 mt-5">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
            Account ID
            </label>
            <input readOnly className="appearance-none block w-full bg-gray-200 text-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={account._id}/>
              
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
            Created At
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" readOnly value={moment(account.createdAt).format("DD MMMM YYYY")} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
            Balance
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" readOnly value={new Intl.NumberFormat("BD", {
            style: "currency",
            currency: "BDT",
          }).format(account.balance)} />
              
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
            OutGoing Transcations
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" readOnly value={account.out.length > 0
            ? new Intl.NumberFormat("BD", {
              style: "currency",
              currency: "BDT",
            }).format(
                account.out.reduce(
                  (totalAmount, log) => (totalAmount += log.balance_transfered),
                  0
                )
              )
            : new Intl.NumberFormat("BD", {
              style: "currency",
              currency: "BDT",
            }).format(0)}/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
            Incoming Transcations
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" readOnly value={account.in.length > 0
            ? new Intl.NumberFormat("BD", {
              style: "currency",
              currency: "BDT",
            }).format(
                account.in.reduce(
                  (totalAmount, log) => (totalAmount += log.balance_transfered),
                  0
                )
              )
            : new Intl.NumberFormat("BD", {
              style: "currency",
              currency: "BDT",
            }).format(0)}/>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
            Deposit Amount
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" readOnly value={
              account.deposit_logs.length > 0
              ? new Intl.NumberFormat("BD", {
                style: "currency",
                currency: "BDT",
              }).format(
                  account.deposit_logs.reduce(
                    (totalAmount, log) => (totalAmount += log.depositted_amount),
                    0
                  )
                )
              : new Intl.NumberFormat("BD", {
                style: "currency",
                currency: "BDT",
              }).format(0)}/>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
            Withdrawal Amount
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" readOnly value={account.withdraw_logs.length > 0
            ? new Intl.NumberFormat("BD", {
              style: "currency",
              currency: "BDT",
            }).format(
                account.withdraw_logs.reduce(
                  (totalAmount, log) => (totalAmount += log.withdrawed_amount),
                  0
                )
              )
            : new Intl.NumberFormat("BD", {
              style: "currency",
              currency: "BDT",
            }).format(0)}/>
          </div>
        </div>
      </div>
    </>
  );
};
