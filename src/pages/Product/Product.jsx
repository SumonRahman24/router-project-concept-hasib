import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Product = () => {
  const { products } = useLoaderData();

  return (
    <div className="grid grid-cols-3 p-5 gap-y-5">
      {" "}
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}{" "}
    </div>
  );
};

export default Product;
