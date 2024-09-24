"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const phone = searchParams.get("Phone");
  const email = searchParams.get("Email");

  const sendMethod = phone || email;
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const[showPassword,setShowPassword]=useState(false)

  const handleChange = (element: any, index: number) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  return (
    <div style={{ paddingTop: "72px" }}>
      <div className="mx-auto p-12" style={{ maxWidth: "500px" }}>
        <div className="pt-3  text-center">
          <h2>We have to send you OTP on {sendMethod} </h2>
        </div>
        <div className="pt-4 text-center">Please Enter OTP</div>
        <div className="flex justify-between mt-5">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
              className="text-center"
              style={{
                width: "40px",
                height: "40px",
                fontSize: "20px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                marginRight: index !== otp.length - 1 ? "10px" : "0px",
              }}
            />
          ))}
        </div>
        <div className="text-center py-4">
          <button>Resend OTP</button>
        </div>
        <div className="text-center">
          <button className="bg-gray-500 hover:bg-white border hover:border-black p-4 text-white hover:text-black ">
            Verify OTP
          </button>
        </div>
        <form className="pt-4">
        <div className="flex flex-wrap flex-col py-4">
          <div>
            <label>New Password</label>
          </div>
          <div onMouseEnter={()=>setShowPassword(true)}onMouseLeave={()=>setShowPassword(false)} >
            <input type={showPassword ?'text':'password'} className="inline-block p-3 border rounded w-full" />
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div>
            <label>Confirm Password</label>
          </div>
          <div  onMouseEnter={()=>setShowPassword(true)}onMouseLeave={()=>setShowPassword(false)}>
            <input type="text" className="inline-block p-3 border rounded w-full" />
          </div>
        </div>
        <div className="py-4">
          <button className="w-full bg-gray-500 hover:bg-white border hover:border-black p-4 text-white hover:text-black ">Reset Password</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
