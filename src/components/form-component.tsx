import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  asin: string;
  locale: string;
  price: string;
  productName: "";
  productLink: "";
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    asin: "",
    locale: "",
    price: "",
    productName: "",
    productLink: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formStyle}>
      <TextField
        label="ASIN"
        name="asin"
        value={formData.asin}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Locale"
        name="locale"
        value={formData.locale}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        margin="normal"
        fullWidth
        rows={4}
      />
      <TextField
        label="Product Name"
        name="product_name"
        value={formData.productName}
        onChange={handleChange}
        margin="normal"
        fullWidth
        rows={4}
      />
      <TextField
        label="Product Link"
        name="product_link"
        value={formData.productLink}
        onChange={handleChange}
        margin="normal"
        fullWidth
        rows={4}
      />

      <Button type="submit" variant="contained" color="primary">
        Add Product
      </Button>
    </form>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  formStyle: {
    margin: "10px",
    padding: "5px",
    border: "3px solid lightblue ",
    borderRadius: "5px",
  },
};

export default Form;
