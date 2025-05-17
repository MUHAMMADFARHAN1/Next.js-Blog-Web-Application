//Function to display cached articles
export const fetchArticles = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Article 1" },
        { id: 2, title: "Article 2" },
        { id: 3, title: "Article 3" },
      ]);
    }, 2000);
  });
};

//function to display fetched products
export const fetchProducts = async () => {
  let response = await fetch("https://api.escuelajs.co/api/v1/products");
  let data = await response.json();
  return data;
};

//function to fetch via the use of slugs
export const fetchProductBySlug = async (slug: string) => {
  let response = await fetch(
    `https://api.escuelajs.co/api/v1/products/slug/${slug}`
  );
  let data = await response.json();
  throw new Error("error");
  //   return data;
};
