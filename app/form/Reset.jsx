"use client";
import "./formstyle.css";
import { useState } from "react";
import Axios from "axios";
import { apiurl } from "../config/info";
import toast from "react-hot-toast";
import jsCookies from "js-cookie";

export default function Reset() {
  const forgetObj = {
    email: "",
  };

  const [state, setState] = useState({ ...forgetObj });
  const [mail, setmail] = useState('')

  const [loading, setloading] = useState(false);

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      if (state.email != "") {
        setloading(true);
        const { data, status } = await Axios.post(apiurl + "reset", state);
        console.log(data);
        if (status == 200) {
          setmail(`Plese check your Email  And use this pasword.` )
          setloading(false);
        } else if (status == 201) {
          toast.error(data.message);
          setloading(false);
        }
      } else {
        toast.error("Empty box");
        setloading(false);
      }
    } catch (error) {
      toast.error('connection error')
      setloading(false);
    }
  };

  return (
    <div>
      <div className="right">
        <div className="w-[100%] mx-auto text-center   px-3  md:w-[400px]">
          <p className=" text-gray-500 py-3">Reset password</p>
          <form onSubmit={handlesubmit} className=" w-[80%] mx-auto">
            <input
              type="email"
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Username or Email"
              value={state.email}
            />

            <button className="primaryBg loginbtn mt-1 rounded-sm  w-full py-1">
              {loading ? "Reseting..." : "Reset"}
            </button>
          </form>

{mail && (
  <p className="bg-blue-100 px-2 mt-3 py-1  rounded-md">{mail}</p>
)}
          <div className="more w-fit text-center">
            <small>
              People who use our service may have uploaded your contact
              information toe By signing up, you agree to our Terms , .
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
