import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { FormData } from "../common/interfaces/form-data";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";

interface FormProps {
  submitURL: string;
}
const initialFormState: FormData = {
  asin: "",
  locale: "",
  price: "",
  name: "",
  link: "",
  seller_name: "",
};
const BASEURL = "http://localhost:5000/api";

const ProductForm: React.FC<FormProps> = ({ submitURL }) => {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(formData);
      await axios.post(`${BASEURL}/products`, formData);
      setFormData(initialFormState);
      setErrors([]);
    } catch (e: any) {
      console.log(e);
      setErrors(e.response.data.errors.map((err: any) => err.msg));
    }
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
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        fullWidth
        rows={4}
      />
      <TextField
        label="Product Link"
        name="link"
        value={formData.link}
        onChange={handleChange}
        margin="normal"
        fullWidth
        rows={4}
      />
      <TextField
        label="Seller Name"
        name="seller_name"
        value={formData.seller_name}
        onChange={handleChange}
        margin="normal"
        fullWidth
        rows={4}
      />

      <ErrorMessage errors={errors} />

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

export default ProductForm;
