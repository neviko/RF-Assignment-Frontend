import React, { useState } from "react";
import "./App.css";
import { Product } from "./common/interfaces/product";
import SearchBar from "./components/SellerSearch";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import axios from "axios";

const BASEURL = "http://localhost:5000/api";
function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProductsBySeller = async (sellerName: string): Promise<void> => {
    try {
      setProducts([]);
      const { data: fetchedProducts } = await axios.get(
        `${BASEURL}/products/seller/${sellerName}`
      );
      setProducts(fetchedProducts);
    } catch (e) {
      console.error(`error while fetching products`);
    }
  };

  const deleteProduct = async (asin: string, locale: string) => {
    try {
      await axios.delete(`${BASEURL}/products`, {
        data: { products: [{ asin, locale }] },
      });
      const filteredProducts = products.filter(
        (product) => product.asin !== asin && product.locale !== locale
      );
      setProducts(filteredProducts);
    } catch (e) {
      console.error(`error while deleting products`);
    }
  };

  return (
    <div>
      <h1 style={styles.header}>Seller Platform React SPA</h1>
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
          <ProductForm submitURL={BASEURL} />
        </div>

        <div style={{ flex: 2 }}>
          <ProductList products={products} onDeleteProduct={deleteProduct} />
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
  header: {
    textAlign: "center",
  },
};

export default App;
