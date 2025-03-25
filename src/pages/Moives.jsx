import React from "react";
import Product from "../components/Product";
import { lazy,Suspense } from "react";
const Product=lazy(()=>import("../components/Product"));
const Moives = () => {
  return (
    <div>
      <Suspense fallback={<div>Product is loading...</div>}>
        <Product />
      </Suspense>
    </div>
  );
};

export default Moives;
