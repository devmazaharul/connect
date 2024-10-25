"use client";
import Link from "next/link";
import "./formstyle.css";
import { useState } from "react";
import Axios from "axios";
import toast from "react-hot-toast";
import { apiurl } from "../config/info";
export default function Signup() {
  const signupObj = {
    fullname: "",
    email: "",
    gender: "",
    password: "",
  };

  const [state, setState] = useState({ ...signupObj });

  const [loading, setloading] = useState(false);
  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    
    try {
      setloading(true);
      if (
        state.email != "" &&
        state.password != "" &&
        state.fullname !== "" &&
        state.gender !== ""
      ) {

     if(state.fullname.length<31){
      if(state.password.length>5){
        const { data, status } = await Axios.post(apiurl + "register", state);

        if (status == 200) {
          toast.success(data.message);
          setloading(false);
          setState({ ...signupObj });
        } else if (status == 201) {
          toast.error(data.message);
          setloading(false);
        } else if (status == 202) {
          toast.error(data.message);
          setloading(false);
        }
      }else{
        toast.error("Password min 6 digit")
        setloading(false);
      }
     }else{
      toast.error("Name min max 30 digit")
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
    <div className="  items-center mx-auto gap-2">
      <div>
        <div className="right">
          <div className="w-[100%] mx-auto text-center   px-3  md:w-[400px]">
            <p className=" text-gray-500 py-3">
              Sign up to see photos and videos from your friends.{" "}
            </p>
            <form onSubmit={handlesubmit} className=" w-[80%] mx-auto">
              <input
                type="text"
                onChange={(e) => handleChange("fullname", e.target.value)}
                placeholder="Full name"
                value={state.fullname}
              />
              <input
                type="email"
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Email"
                value={state.email}
              />

              <select
                onChange={(e) => handleChange("gender", e.target.value)}
                className="w-full border px-2 py-2 outline-none"
                value={state.gender}
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="famale">Famale</option>
              </select>

              <input
                type="pssword"
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="Password"
                value={state.password}
              />
              <button className="primaryBg loginbtn mt-1 rounded-sm text-gray-100 w-full py-1">
                {loading ? " Registering..." : "Register"}
              </button>
            </form>

            <div className="text-center py-2 ">
              <p>
                Already have an account?
                <Link className="text-sky-600" href={"/login"}>
                  {" "}
                  Login
                </Link>
              </p>
            </div>

            <div className="more w-fit text-center">
              <small>
                People who use our service may have uploaded your contact
                information to By signing up, you agree to our Terms , .
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
