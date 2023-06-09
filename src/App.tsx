import React, { useState } from "react";
import "./App.css";
import { Product } from "./common/interfaces/product";
import SearchBar from "./components/seller-search";
import Form from "./components/form-component";
import ProductList from "./components/product-list";
import axios from "axios";

const BASEURL = "http://localhost:5000/api";
function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProductsBySeller = async (sellerName: string): Promise<void> => {
    try {
      const { data: fetchedProducts } = await axios.get(
        `${BASEURL}/products/seller/${sellerName}`
      );
      setProducts(fetchedProducts);
    } catch (e) {
      console.error(`error while fetching products`);
    }
  };

  return (
    <div>
      <h1>Seller Platform React SPA</h1>
      <SearchBar
        label="Seller Name"
        onSearch={async (text: string) => {
          await fetchProductsBySeller(text);
          return "";
        }}
      />
      {/* <App /> */}
      <div style={styles.horizontalContainer}>
        <div style={{ flex: 1 }}>
          <Form submitURL={BASEURL} />
        </div>

        <div style={{ flex: 2 }}>
          <ProductList
            products={products}
            onDeleteProduct={(productId) => {
              console.log(`productId ${productId}`);
            }}
          />
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  horizontalContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

export default App;
