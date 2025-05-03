import React from "react";
import linkedin from "../Images/linkedin.svg";
import facebook from "../Images/facebook.svg";
import google from "../Images/google.svg";
import Header from "./Header";

const SignupPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-md px-6 py-10">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Welcome to SmartCives
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Sign in or create an account to get started.
          </p>

          <div className="space-y-4">
            <button className="w-full flex cursor-pointer items-center justify-center border border-gray-300 rounded-4xl py-3 transition delay-5 hover:bg-[#dddddd] text-gray-700">
              <img src={google} alt="Google" className="w-4 h-4 mr-2" />
              Continue with Google
            </button>
            <button className="w-full flex cursor-pointer items-center justify-center border border-gray-300 rounded-4xl py-3 transition delay-5 hover:bg-[#dddddd] text-gray-700">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-2" />
              Continue with LinkedIn
            </button>
            <button className="w-full flex cursor-pointer items-center justify-center border border-gray-300 rounded-4xl py-3 transition delay-5 hover:bg-[#dddddd] text-gray-700">
              <img src={facebook} alt="Facebook" className="w-5 h-5 mr-2" />
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
