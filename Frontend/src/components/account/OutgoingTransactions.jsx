import moment from "moment";
import React from "react";
import { FcShipped } from "react-icons/fc";
import { useSelector } from "react-redux";
import { PaginationOutgoingList } from "../helpers/PaginationOutgoingList";
import {
  FaCalendarAlt,
  FaInfoCircle,
  FaMoneyBillWave,
  FaUser,
} from "react-icons/fa";

export const OutgoingTransactions = () => {
  //Get account data
  const { account } = useSelector((state) => state.userAccount);

  //Get OutGoing Log List
  const outgoing = account.out;

  //OutGoing Transaction UI Data
  const outgoingTransaction = (transaction) => {
    return (
      <tr
        key={transaction._id}
        className="bg-blue-200 p-4 rounded border-2 shadow"
      >
        <td className="text-center">
          
          
            {transaction._id}
  
        </td>
        <td className="text-center">
         
          
            {transaction.to}
          
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
  if (!outgoing || outgoing.length === 0)
    return (
      <div className="max-w-2xl w-full mx-auto my-4 flex flex-col gap-4 items-center justify-center flex-wrap  bg-pink-100 p-4 border-2 border-pink-800 rounded shadow">
        <FaInfoCircle className="text-yellow-500" size={60} />

        <p className="text-gray-800 text-base font-semibold">
          You Have Not Sent Any Transactions Yet
        </p>
      </div>
    );

  return (
    <div className="max-w-5xl w-full self-start">
      <h3 className="text-blue-800 border-b-2 text-2xl  font-bold  py-4 mb-10">
        
        E-Bank / Outgoing Transactions
      </h3>

      <PaginationOutgoingList
        outgoingTransactions={outgoing.slice(0).reverse()}
        outgoingTransaction={outgoingTransaction}
        rowsPerPage={10}
      />
    </div>
  );
};
