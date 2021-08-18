import { Text } from "@chakra-ui/react";
import { Header, Product } from "../components/";
const Products = ({ productsData }) => {
  return (
    <>
      <Header title="products page" />
      <Text fontSize="2xl">Products Page</Text>
      {productsData.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products?limit=10");
  const productsData = await products.json();
  return {
    props: { productsData },
  };
}

export default Products;
