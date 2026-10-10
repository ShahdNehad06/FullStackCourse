import { useState } from "react";
import { initialProducts } from "./products";
import type { Product } from "./products";

function App() {
  // Initialize the state with the initial products
  // Use the Product type for the state
  const [products, setProducts] =
    //"setProducts" is a function that updates the state of "products".
    useState<Product[]>(initialProducts);

  function removeProduct(id: number) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <div>
      <h1>Product List</h1>

      <h3>Total Products: {products.length}</h3>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - EGP{product.price}
          </span>

          <button onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;
