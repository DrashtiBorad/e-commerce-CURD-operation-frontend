"use client";
import Link from "next/link";
import React, {  useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { getUserDetails, getUserId } from "@/utills/cookie.helper";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router=useRouter()
  const [openDropDown, setOpenDropDown] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [userDetail, setUserDetail] = useState<any>(null);


  useEffect(() => {
    const storedUserId = getUserId();
    const storedUserDetail = getUserDetails();
    setUserId(storedUserId);
    setUserDetail(storedUserDetail);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("user");
    setUserId(null);
    setUserDetail(null);
    router.push("/");
  };

  console.log("user", userDetail,userId);
  return (
    <>
      <div className="bg-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="flex flex-wrap justify-between">
          <div className="flex m-4">
            <div className="p-2">
              <Link href={"/"}>
                <IoHome size={30} />
              </Link>
            </div>

            { userId&&(
              <>
                <div className="p-2">
                  <Link href={"/addProduct"}>Add Products</Link>
                </div>
                <div
                  className="inline-block justify-between p-2"
                  onClick={() => setOpenDropDown(!openDropDown)}>
                  <div>
                    <Link href={""}>Products</Link>
                    {openDropDown && (
                      <div
                        className="bg-gray-200
               w-10 top-20 absolute p-3"
                        style={{ minWidth: "160px" }}>
                        <span>dasdasd</span>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          <div>
            <div className="w-full md:block md:w-auto" id="navbar-default">
              <div className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {userId ? (
                  <>
                    <div className="p-4 text-black relative inline-block ">
                      <div>
                        <IoPersonCircleOutline
                          size={40}
                          color="black"
                          className="cursor-pointer"
                        />
                      </div>
                      <div>adsadadsa</div>
                    </div>
                    <div className="p-4 text-black hover:text-gray-400 flex items-center">
                      <Link
                        href=""
                        onClick={handleLogout}>
                        LogOut
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-4 text-black hover:text-gray-400">
                      <Link href="/signUp">Sign Up</Link>
                    </div>
                    <div className="p-4 text-black hover:text-gray-400">
                      <Link href="/signIn">Sign In</Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto"></div>
      </div>
    </>
  );
};

export default Navbar;
