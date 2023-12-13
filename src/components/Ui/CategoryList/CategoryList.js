import { getAllCategories } from "@/utils/getAllCategories";
import React from "react";

const CategoryList = async () => {
  const data = await getAllCategories();
  console.log(data);
  return (
    <div>
      <h1>aa</h1>
    </div>
  );
};

export default CategoryList;
