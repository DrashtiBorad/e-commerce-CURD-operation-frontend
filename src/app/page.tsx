  "use client";
  import React, { useEffect, useState } from "react";

  import CategoryCard from "@/components/categoryCard";
  import { useRouter } from "next/navigation";
  import { FaThList } from "react-icons/fa";
  import { BsGrid3X2GapFill } from "react-icons/bs";
  import { GrPrevious } from "react-icons/gr";
  import { GrNext } from "react-icons/gr";
  import { FaCaretDown } from "react-icons/fa";
  import useFetchProduct from "@/modules/Auth/hooks/useFetchProducts";

  const GetProduct = () => {
    const [getData, setGetData] = useState<any>([]);
    const [isList, setIsList] = useState(false);
    const [totalUser, setTotalUser] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [sortBy, setSortBy] = useState("");
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const router = useRouter();
    const limit = 6;
      const {data:fetchData} =  useFetchProduct(limit, activePage, sortBy);
     console.log('fetchData',fetchData?.data?.Products)

    const pageNumber = (total: number, limit: number) => {
      const number: any = [];
      for (let x = 1; x <= Math.ceil(total / limit); x++) {
        number.push(x);
      }
      return number;
    };

    
    // useEffect(() => {
    //   getProductData();
    // }, [activePage, sortBy]);

    const deleteUSer = async (id: any) => {};
    console.log('hemml')
    const searchHandle = async (event: any) => {
      const key = event.target.value;
    };
    console.log("getData", getData.data, totalUser);
    return (
      <div className="pt-7 mt-16">
        <div className="pt-7">
          <div className="flex justify-end mx-auto gap-3 p-7">
            {/* <div className="text-black  flex items-center border-2 border-black w-fit">
            <div className="p-2 bg-white border-0 outline-none border-transparent">
              <input
                type="search"
                placeholder="Enter Serch Text"
                onChange={searchHandle}
              />
              <button className="text-gray-950">
                <span>
                  <AiOutlineSearch />
                </span>
              </button>
            </div>
          </div> */}

            <BsGrid3X2GapFill
              size={30}
              onClick={() => setIsList(false)}
              className="cursor-pointer"
            />
            <h2>Grid</h2>

            <FaThList
              size={25}
              onClick={() => setIsList(true)}
              className="cursor-pointer"
            />
            <h2>List</h2>
            <div
              className="relative inline-block text-left"
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
              <label htmlFor="sortBy" className="sr-only">
                Sort By:
              </label>
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sort by
                  <FaCaretDown />
                </button>
              </div>
              {isDropDownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <button
                      onClick={() => setSortBy("AtoZ")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      Category A-Z
                    </button>
                    <button
                      onClick={() => setSortBy("ZtoA")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      Category Z-A
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className={`grid ${
              isList ? "grid-cols-1" : "grid-cols-3"
            } gap-4 p-4`}>
            {(getData?.data?.Products || [])?.map((data: any) => {
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
            })}
          </div>

          <div className="flex justify-center p-6">
            {activePage !== 1 && (
              <div
                className={`border border-black rounded-lg p-3 items-center `}
                onClick={() => setActivePage(activePage - 1)}>
                <GrPrevious />
              </div>
            )}
            {pageNumber(totalUser, limit).map((data: number) => {
              return (
                <div
                  key={data}
                  className={`border border-black rounded-md p-3 cursor-pointer ${
                    data === activePage ? "bg-gray-500" : ""
                  }`}
                  onClick={() => setActivePage(data)}>
                  {data}
                </div>
              );
            })}
            {activePage !== totalUser / limit && (
              <div
                className="border border-black rounded-lg p-3 items-center"
                onClick={() => setActivePage(activePage + 1)}>
                <GrNext />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default GetProduct;
