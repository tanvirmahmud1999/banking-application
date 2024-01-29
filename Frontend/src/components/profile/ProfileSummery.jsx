import React from "react";
import { FcBusinessman } from "react-icons/fc";

export default function ProfileSummery({ info }) {
  return (
    <div>
      <h3 className="flex items-center text-blue-900 mb-10 text-xl font-bold border-b-2 py-4 my-4">
        
        E-Bank / {info.name}
      </h3>

      <ul className="w-full max-w-[550px] py-2  mt-3">
        <li className="flex items-center p-3 mb-2  rounded shadow bg-blue-200">
          <span className="font-semibold">Status</span>
          <span className="ml-auto">
            <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
              {!info.userStatus && "Active"}
            </span>
          </span>
        </li>
        <li className="flex items-center p-3  rounded shadow bg-blue-200">
          <span className="font-semibold">Member since</span>
          <span className="ml-auto">
            {new Date(info.createdAt).toLocaleDateString()}
          </span>
        </li>
      </ul>
    </div>
  );
}
