import React from "react";

import Link from "next/link";

import { fetchArticles, fetchProducts } from "@/api/blog";

export default async function page() {
  // let articles: any = await fetchArticles();
  let articles: any = await fetchProducts();

  return (
    <>
      <h1 className="ml-180">Blog Articles</h1>
      {articles.map((article: any) => (
        <div className="flex flex-row gap-5 mx-auto w-max">
          <h1>{article.title}</h1>
          <h2>{article.author}</h2>
          <h2>{article.body}</h2>
          <Link href={`/blogs/${article.id}`}>See Details</Link>
        </div>
      ))}
    </>
  );
}
