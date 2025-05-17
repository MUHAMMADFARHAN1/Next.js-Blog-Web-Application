import React from "react";

import { fetchArticles } from "@/api/blog";

export default async function page() {
  let articles: any = await fetchArticles();
  return (
    <>
      <h1>Blog Articles</h1>
      {articles.map((article: any) => (
        <h2>{article.title}</h2>
      ))}
    </>
  );
}
