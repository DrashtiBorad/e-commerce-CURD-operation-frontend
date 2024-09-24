import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

interface CategoryCardProps {
  category: string;
  name: string;
  price: string;
  company: string;
  OnEditClick: () => void;
  onDeleteClick: () => void;
  image: string;
}
const CategoryCard = ({
  category,
  company,
  name,
  price,
  OnEditClick,
  onDeleteClick,
  image,
}: CategoryCardProps) => {
  return (
    <div
      className="border p-4 rounded-lg shadow-md "
      style={{ height: "198px" }}>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-1">
          <img src={`${image}`} alt="" style={{ height: "163px" }} />
        </div>
        <div className="grid grid-cols-1">
          <div className="flex justify-around">
            <div>
              <div className="p-1 ">{category}</div>
              <div className="p-1 ">{name}</div>
              <div className="p-1">{price}</div>
              <div className="p-1">{company}</div>
            </div>
            <div>
              <div className="p-2">
                <Link onClick={OnEditClick} href={""}>
                  <FaEdit size={25} />
                </Link>
              </div>
              <div className="p-2">
                <Link onClick={onDeleteClick} href={""}>
                  <RiDeleteBinFill size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
