import { Product } from "../../components";
const ProductPage = ({ productData }) => {
  return <Product product={productData} />;
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const product = await fetch(`https://fakestoreapi.com/products/${id}`);
  const productData = await product.json();
  return {
    props: { productData },
  };
}

export default ProductPage;
