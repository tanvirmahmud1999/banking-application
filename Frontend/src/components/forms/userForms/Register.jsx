import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FcCurrencyExchange } from "react-icons/fc";
import { TiUserAdd } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../../state/features/User/Auth/authSlice";
import FormButton from "../../shared/FormButton";
import { Logo } from "../../shared/Logo";
import MessagesContainer from "../../shared/MessagesContainer";
import { InputsValidator } from "../helpers/InputsValidator";

export default function Register() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    password: "",
    repeatPassword: "",
    email: "",
    phone: "",
    address: "",
    postCode: "",
    msg: "",
  });

  const {
    postCode,
    email,
    password,
    phone,
    address,
    name,
    repeatPassword,
    msg,
  } = formInputs;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.userAuth
  );

  useEffect(() => {
    if (isError) {
      setFormInputs({ ...formInputs, msg: message });
    }

    if (user || isSuccess) {
      setFormInputs({
        ...formInputs,
        msg: "Registered Succesfully",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [user, isError, isSuccess, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //set error msg to none first
    setFormInputs({ ...formInputs, msg: "" });

    const userData = {
      name: name.trim(),
      email: email.trim(),
      addresse: address.trim(),
      password,
    };

    dispatch(register(userData));
  };

  return (
    <div className="block p-6 rounded shadow-lg shadow-black/20 bg-slate-50 w-full mx-auto">
      
      <h3 className="flex justify-center items-center text-2xl text-blue-800 font-bold text-center p-2 my-4 select-none">
        
        <span>Register</span>
      </h3>

      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6">
        <label
            htmlFor="email"
            className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
          >
            Name
          </label>
          <input
            type="text"
            name="first_name"
            defaultValue={name}
            onChange={(e) =>
              setFormInputs({ ...formInputs, name: e.target.value })
            }
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Name"
            required
          />
        </div>

        {/* name validator */}
        {/* <InputsValidator nameInput={`${firstName} ${lastName}`} /> */}

        <div className="relative z-0 w-full mb-6">
          
        <label
            htmlFor="email"
            className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={(e) =>
              setFormInputs({ ...formInputs, email: e.target.value })
            }
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="relative z-0 w-full mb-6">
        <label
            htmlFor="email"
            className="w-full inline-block font-semibold mb-4 p-2 text-gray-800 border-b-4 border-blue-800 rounded shadow bg-blue-200"
          >
            Password
          </label>

          <input
            type="password"
            name="password"
            defaultValue={password}
            onChange={(e) =>
              setFormInputs({ ...formInputs, password: e.target.value })
            }
            className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Strong Password"
            required
          />
        </div>

        {/* password validator */}
        {/* <InputsValidator passwordInput={password} /> */}

        {/*Request Status and Errors*/}
        {(isError || isSuccess) && (
          <MessagesContainer
            msg={msg}
            isSuccess={isSuccess}
            isError={isError}
          />
        )}

        {/*form button */}
        <FormButton
          text={{ loading: "Processing", default: "Register" }}
          isLoading={isLoading}
          icon={<TiUserAdd className="mb-[-2px] ml-1" size={27} />}
        />
      </form>
    </div>
  );
}
