"use client";
import Link from "next/link";
import "./formstyle.css";
import { useState } from "react";
import Axios from "axios";
import { apiurl } from "../config/info";
import toast from "react-hot-toast";
import jsCookie from "js-cookie";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const loginObj = {
    email: "",
    password: "",
  };

  const [state, setState] = useState({ ...loginObj });

  const [loading, setloading] = useState(false);

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      if (state.email != "" && state.password != "") {
        setloading(true);
        const { data, status } = await Axios.post(apiurl + "login", state);
        if (status == 200) {
          jsCookie.set("token", data.token, { expires: 7 });
          toast.success(data.message);
          setloading(false);
          router.replace("/main");
        } else if (status == 201) {
          toast.error(data.message);
          setloading(false);
        } else if (status == 202) {
          toast.error(data.message);
          setloading(false);
        }
      } else {
        toast.error("Empty box");
        setloading(false);
      }
    } catch (error) {
      toast.error("Connection error");
      setloading(false);
    }
  };

  return (
    <div>
      <div className="right">
        <div className="w-[100%] mx-auto text-center   px-3  md:w-[400px]">
          <p className=" text-gray-500 py-3">Access your accounts</p>
          <form onSubmit={handlesubmit} className=" w-[80%] mx-auto">
            <input
              type="email"
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Username or Email"
              value={state.email}
            />
            <input
              type="pssword"
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Password"
              value={state.password}
            />
            <button className="bg-purple-500 loginbtn mt-1 rounded-sm text-gray-100 w-full py-1">
              {loading ? "Loading..." : " Log in"}
            </button>
          </form>

          <div className="py-4">
            <small>OR</small>
            <br />

            <Link href={"/reset"} className="text-purple-600 text-sm ">
              Reset password
            </Link>
          </div>

          <div className="text-center w-fit mx-auto  px-3">
            <p className="text-center">
              Don't have an account?
              <Link className="text-indigo-600" href={"/register"}>
                {" "}
                Register
              </Link>
            </p>
          </div>
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
