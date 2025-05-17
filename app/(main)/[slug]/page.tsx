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
      <p>hello world</p>
    </div>
  );
}
