"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  sendType: string;
  Phone: number;
}
const ForgotPassword = () => {
  const router = useRouter();
  const { handleSubmit, register, watch } = useForm();
  const radioFieldValue = watch("sendType");

  const onSubmit = async (values: any) => {
    router.push(
      `/resetPassword?${values.sendType}=${
        values.sendType == "Phone" ? values.Phone : values.Email
      }`
    );
  };

  return (
    <div style={{ paddingTop: "72px" }}>
      <div className="mx-auto p-12" style={{ maxWidth: "500px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>Please select method which you want to reset your Password</div>
          <div className="pl-3">
            <input type="radio" value="Phone" {...register("sendType")} />
            <label htmlFor="phone" className="p-2">
              Phone
            </label>
            <input type="radio" value="Email" {...register("sendType")} />
            <label htmlFor="email" className="p-2">
              Email
            </label>
          </div>
          {radioFieldValue && (
            <div className="flex flex-wrap flex-col p-4">
              <label htmlFor="email" className="p-2">
                Enter {radioFieldValue}:
              </label>
              <input
                type={radioFieldValue === "Phone" ? "tel" : "email"}
                {...register(radioFieldValue)}
                className="inline-block p-3 border rounded"
              />
              <div className="pt-4">
                <button className="p-3 w-full border border-black rounded">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
