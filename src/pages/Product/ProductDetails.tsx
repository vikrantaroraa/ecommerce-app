import { Link, useParams } from "react-router-dom";
import ProductsList from "src/api/ProductsList";

const ProductDetails = () => {
  const { productId } = useParams();

  const product = ProductsList.find(
    (product) => product.id === Number(productId)
  );
  return (
    <>
      {product && (
        <div
          style={{
            padding: "1rem",
            listStyle: "none",
            margin: "1rem",
            border: "1px solid #efefef",
          }}
        >
          <div style={{ fontSize: "large" }}>
            <b>Product:</b> {product.name}
          </div>

          <div style={{ fontSize: "large" }}>
            <b>Memory:</b> {product.memory} GB
          </div>

          <div>
            <b>Price:</b> {product.price} {product.currency}
          </div>
          <div>
            <b>Description:</b> <br />
            {product.details}
          </div>
        </div>
      )}
      {!product && <h2>Product not found!!</h2>}

      <Link to="/">All Products</Link>
    </>
  );
};

export default ProductDetails;
