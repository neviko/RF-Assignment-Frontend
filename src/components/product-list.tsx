import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";

interface Product {
  asin: string;
  locale: string;
  price: string;
  productName: string;
  productLink: string;
  id: string;
}

interface ProductListProps {
  products: Product[];
  onDeleteProduct: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onDeleteProduct,
}) => {
  return (
    <TableContainer component={Paper} style={styles.tableStyle}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Asin</TableCell>
            <TableCell align="right">Locale</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Product Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.asin}
              </TableCell>
              <TableCell align="right">{row.locale}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.productName}</TableCell>
              <TableCell align="right">{row.productLink}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => onDeleteProduct(row.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  tableStyle: {
    margin: "10px",
    padding: "5px",
    border: "3px solid lightblue ",
    borderRadius: "5px",
  },
};
export default ProductList;
