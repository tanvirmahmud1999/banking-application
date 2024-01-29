import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { PaginationIncomingList } from "../helpers/PaginationIncomingList";
import { FcInTransit } from "react-icons/fc";
import {
  FaCalendarAlt,
  FaInfoCircle,
  FaMoneyBillWave,
  FaUser,
} from "react-icons/fa";

export const IncomingTransactions = () => {
  //Get account data
  const { account } = useSelector((state) => state.userAccount);

  //Get Incoming Log List
  const incoming = account.in;

  //Incoming Transaction UI Data
  const incomingTransaction = (transaction) => {
    return (
      <tr
        key={transaction._id}
        className="bg-blue-200 p-4 rounded shadow border-2"
      >
        <td className="text-center">
          
          
            {transaction._id}
  
        </td>
        <td className="text-center">
         
          
            {transaction.from}
          
        </td>
        <td className="text-center">
          
          
            {new Intl.NumberFormat("BD", {
              style: "currency",
              currency: "BDT",
            }).format(transaction.balance_transfered)}
          
        </td>
        <td className="text-center">
          
          
            {moment(transaction.createdAt).format("DD-MM-YYYY")}
          
        </td>
      </tr>
    );
  };

  //In case Of No Transactions Log
  if (!incoming || incoming.length === 0)
    return (
      <div className="max-w-2xl w-full mx-auto my-4 flex flex-col gap-4 items-center justify-center flex-wrap  bg-pink-100 p-4 border-2 border-pink-800 rounded shadow">
        <FaInfoCircle className="text-yellow-500" size={60} />
        <p className="text-gray-800 text-base font-semibold">
          You Have Not Received Any Transactions Yet
        </p>
      </div>
    );

  return (
    <div className="max-w-5xl w-full self-start">
      <h3 className="text-blue-800 text-2xl border-b-2 font-bold  py-4 mb-10 ">
        E-Bank / Incoming Transactions
      </h3>

      <PaginationIncomingList
        incomingTransactions={incoming.slice(0).reverse()}
        incomingTransaction={incomingTransaction}
        rowsPerPage={10}
      />
    </div>
  );
};
