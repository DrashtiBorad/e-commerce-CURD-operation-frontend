"use client";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useLogin from "@/modules/Auth/hooks/useLoginUser";

interface registrationFieldValue {
  email: string;
  password: string;
}

const SignIn = () => {
  const router=useRouter()
  const { handleSubmit, register } =
    useForm<registrationFieldValue>();
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: loginUser } = useLogin();

  const onSubmit = async (values: registrationFieldValue) => {
    loginUser(values, {
      onSuccess: (userData) => {
        console.log('user',userData,userData?.data?.user._id)
        alert("Login Successfully");
        localStorage.setItem('userId',userData?.data?.user._id)
        localStorage.setItem('token',userData?.data?.user)
        router.refresh()
        router.push('/')
      },
      onError: (err) => {
        alert("Please Enter Valid Email or Password.");
      },
    });
  };

  return (
    <div className="pt-32">
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <div className="text-center relative">
          <label htmlFor="password">Password</label>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="h-10 border-2 border-black w-5/12 pr-10"
            />
            {showPassword ? (
              <BsEyeSlashFill
                className="absolute top-1/2 right-96  transform  cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <BsEyeFill
                className="absolute top-1/2 right-96 transform cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>

        <div className="text-center py-4">
          <button
            type="submit"
            className="border-2 border-black h-16 py-2 w-5/12 bg-gray-200 text-black hover:text-white hover:bg-cyan-700">
            Sign In
          </button>
        </div>
      </form>
      <div className="text-center py-2">
        <Link href="/forgotPassword" className=" h-16 py-6 px-24 w-5/12">
          Forgot Pasword
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
