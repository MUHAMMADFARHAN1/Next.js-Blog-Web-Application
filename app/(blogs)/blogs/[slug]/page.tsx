import React from "react";

import { fetchProductBySlug } from "@/api/blog";

export default async function page({ params }: any) {
  params = await params;

  let product: any = await fetchProductBySlug(params.slug);

  // try {
  //   product = await fetchProductBySlug(params.slug);
  // } catch (error) {
  //   console.log("error fetching product");
  // }

  // if (!product) return <p>Product not found</p>;
  //   return <div className="py-8 text-4xl">{product.title}</div>;
  return (
    <div className="py-8 text-4xl">
      {/* <p>hello world</p> */}
      <p>{product.id}</p>
      <p>{product.title}</p>
      <p>{product.author}</p>
      <p>{product.body}</p>
    </div>
  );
}

//json server naming convention is imoportant and we need to have an s with name as well no generic name. plural name is needed
