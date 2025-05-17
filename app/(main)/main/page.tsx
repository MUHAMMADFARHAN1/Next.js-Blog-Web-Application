import React from "react";

import { fetchArticles, fetchProducts } from "@/api/blog";

export default async function page() {
  // let articles: any = await fetchArticles();
  let articles: any = await fetchArticles();

  return (
    <>
      {articles.map((article: any) => (
        <div>
          <h1>{article.title}</h1>
          <h2>{article.author}</h2>
          <h2>{article.body}</h2>
        </div>
      ))}
    </>
  );
}
