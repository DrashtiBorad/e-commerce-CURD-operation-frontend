'use client'
import CategoryCard from "@/components/categoryCard";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


const CategoryData = () => {
  

  return (
    <div className="pt-7 mt-16">
      <div className="grid grid-cols-2 gap-4 p-4">
        {/* {(categoryData || [])?.map((data: any) => {
          return (
            <div key={data.id}>
              <CategoryCard
                OnEditClick={() => router.push(`/updateProduct/${data._id}`)}
                category={data.category}
                company={data.company}
                name={data.name}
                onDeleteClick={() => deleteUSer(data._id)}
                price={data.price}
                image={data.image}
              />
            </div>
          );
        })} */}
      </div>
      <div className="flex justify-center mt-4">
        {/* <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setPageSize(pageSize + 1)}
        >
          Load More
        </button> */}
      </div>
    </div>
  );
};

export default CategoryData;
