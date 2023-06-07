import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Form from "./components/form-component";
import ProductList from "./components/product-list";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1>Seller Platform React SPA</h1>
    {/* <App /> */}
    <Form
      onSubmit={(formData) => {
        console.log(formData);
      }}
    />

    <ProductList
      products={[
        {
          asin: "fdg",
          locale: "fdg",
          price: "55",
          productName: "fdg",
          productLink: "fgd",
          id: "string",
        },
      ]}
      onDeleteProduct={(productId) => {
        console.log(`productId ${productId}`);
      }}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
