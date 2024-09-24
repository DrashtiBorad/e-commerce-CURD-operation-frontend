'use client'
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UpdateProduct = () => {

  const { register, handleSubmit, setValue } = useForm();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const getSelectToUpdateUser = async () => {
   
  };

  useEffect(() => {
    getSelectToUpdateUser();
  }, []);

  const onSubmit = async (values: any) => {
    const formData = new FormData();
    for (const key in values) {
      if (key === "image" && values[key][0]) {
        formData.append(key, values[key][0]);
      } else {
        formData.append(key, values[key]);
      }
    }

   
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="pt-7 mt-16">
      <div className="py-7">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center mb-4">
            <div className="flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg w-64 h-48 mx-auto relative">
              <input
                type="file"
                {...register("image")}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Uploaded Preview"
                  // className="w-full h-full object-cover"
                  style={{height:'163px'}}
                />
              ) : (
                <div className="text-gray-500 flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v4M3 3h18m-5 4v10m-4 0v4m0-4V7m4 0H7m0 4h10m-5 4h4m-4 0H7"
                    />
                  </svg>
                  <p>Click to upload</p>
                </div>
              )}
            </div>
          </div>
          {imagePreview ? <></> : <></>}
          <div className="text-center">
            <label htmlFor="name">Name</label>
            <div>
              <input
                type="text"
                {...register("name")}
                className="h-10 border-2 border-black w-5/12"
              />
            </div>
          </div>
          <div className="text-center">
            <label htmlFor="price">Price</label>
            <div>
              <input
                type="text"
                {...register("price")}
                className="h-10 border-2 border-black w-5/12"
              />
            </div>
          </div>
          <div className="text-center">
            <label htmlFor="category">Category</label>
            <div>
              <input
                type="text"
                {...register("category")}
                className="h-10 border-2 border-black w-5/12"
              />
            </div>
          </div>
          <div className="text-center">
            <label htmlFor="company">Company</label>
            <div>
              <input
                type="text"
                {...register("company")}
                className="h-10 border-2 border-black w-5/12"
              />
            </div>
          </div>
          <div className="text-center py-4">
            <button
              type="submit"
              className="hover:border-2 hover:border-black h-16 py-2 w-5/12 bg-gray-500 hover:text-white"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
