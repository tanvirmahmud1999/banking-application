import moment from "moment";
import React from "react";
import { FcSalesPerformance } from "react-icons/fc";
import { useSelector } from "react-redux";
import { PaginationDepositList } from "../helpers/PaginationDepositList";
import { FaCalendarAlt, FaInfoCircle, FaMoneyBillWave } from "react-icons/fa";

export const DepositLogs = () => {
  //Get account data
  const { account } = useSelector((state) => state.userAccount);

  //Get Deposit Logs List
  const depositLogs = account.deposit_logs;

  //Deposit Log UI Data
  const depositLog = (log) => {
    return (
      <li
        key={log._id}
        className="min-h-[150px] my-4 flex flex-col gap-2 items-center justify-center flex-wrap bg-blue-200 p-4 border-x-4 border-blue-800 rounded shadow"
      >
        <p className="w-full flex items-center md:justify-center">
          <FaCalendarAlt className="inline-block mr-2" />
          Date:
          <span className="ml-auto md:mx-2 p-2 bg-orange-600 rounded text-white">
            {moment(log.createdAt).format("DD-MM-YYYY")}
          </span>
        </p>

        <p className="w-full flex items-center md:justify-center">
          <FaMoneyBillWave className="inline-block mr-2" />
          Amount:
          <span className="ml-auto md:mx-2 p-2 text-white bg-green-500 rounded">
            {new Intl.NumberFormat("BD", {
              style: "currency",
              currency: "BDT",
            }).format(log.depositted_amount)}
          </span>
        </p>
      </li>
    );
  };

  //In case Of No Deposit Logs
  if (!depositLogs || depositLogs.length === 0)
    return (
      <div className="max-w-2xl w-full mx-auto my-4 flex flex-col gap-4 items-center justify-center flex-wrap  bg-pink-100 p-4 border-2 border-pink-800 rounded shadow">
        <FaInfoCircle className="text-yellow-500" size={60} />
        <p className="text-gray-800 text-base font-semibold">
          There are no Deposit Logs yet
        </p>
      </div>
    );

  return (
    <div className="max-w-5xl w-full self-start">
      <h3 className="text-blue-800 border-b-2 text-2xl  font-bold py-4 mb-10">
        
        E-Bank / Deposit Logs
      </h3>

      <PaginationDepositList
        depositLogs={depositLogs.slice(0).reverse()}
        depositLog={depositLog}
        rowsPerPage={10}
      />
    </div>
  );
};
