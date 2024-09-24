"use client";
import useRegistration from "@/modules/Auth/hooks/useRegistrtion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { set, useForm } from "react-hook-form";


interface registerInputField{
  fName:string
  lName:string
  email:string
  password:string
  mobileNo:string
}
const SignUp = () => {
  const { handleSubmit, register, setValue } = useForm();
  const { mutate: registredUser } = useRegistration();
  const router=useRouter()

  const onSubmit = async (values: any) => {
    registredUser({
      firstName:values.fName,
      lastName:values.lName,
      email:values.email,
      password:values.password,
      mobileNo:values.mobileNo,
    }, {
      onSuccess: (userData) => {
        alert("registration successfully");
        localStorage.setItem('userId',userData?.data?.result?._id)
        localStorage.setItem('token',userData?.data?.auth)
        router.refresh()
        router.push('/')
      },
      onError: () => {
        alert("Try with diffrent email id this email is already registred.");
      },
    });
  };

  return (
    <>
      <h1 className="text-4xl text-black font-bold text-center py-6 ">
        Registration
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center flex flex-wrap justify-center">
          <div className="flex-col p-2">
            <label htmlFor="fName" className="flex justify-start">
              First Name
            </label>
            <div className=" w-6/12">
              <input
                type="text"
                className="h-10 border-2 border-black"
                {...register("fName")}
              />
            </div>
          </div>

          <div className="flex-col p-2">
            <label htmlFor="lName" className="flex justify-start">
              Last Name
            </label>
            <div className=" w-6/12">
              <input
                type="text"
                {...register("lName")}
                className="h-10 border-2 border-black"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <label htmlFor="email">EMail</label>
          <div>
            <input
              type="email"
              {...register("email")}
              className="h-10 border-2 border-black w-5/12"
            />
          </div>
        </div>

        <div className="text-center">
          <label htmlFor="password">Password</label>
          <div>
            <input
              type="password"
              {...register("password")}
              className="h-10 border-2 border-black w-5/12"
            />
          </div>
        </div>

        <div className="text-center">
          <label htmlFor="mobileNo">Mobile No:</label>
          <div>
            <input
              type="text"
              {...register("mobileNo")}
              className="h-10 border-2 border-black w-5/12"
            />
          </div>
        </div>
        <div className="text-center py-4">
          <button
            type="submit"
            className="hover:border-2 hover:border-black h-16 py-2 w-5/12 bg-gray-500 hover:text-white">
            Sign Up
          </button>
        </div>
        <div className="text-center py-4">
          <Link href="/signIn" className="h-16 py-2 px-16 w-5/12 ">
            Sign In
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignUp;
