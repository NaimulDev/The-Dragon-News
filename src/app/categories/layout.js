import CategoryList from "@/components/Ui/CategoryList/CategoryList";

import React from "react";

const CategoriesLayout = ({ children }) => {
  return (
    // <Grid container spacing={2}>
    //   <Grid item xs={3}>
    //     <CategoryList />
    //   </Grid>
    //   <Grid item xs={9}>
    //     {children}
    //   </Grid>
    // </Grid>

    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <CategoryList />
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default CategoriesLayout;
