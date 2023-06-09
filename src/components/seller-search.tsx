import React, { useState } from "react";
import { Button } from "@mui/material";

interface SearchBarProps {
  label: string;
  onSearch: (text: string) => {};
}

const SearchBar: React.FC<SearchBarProps> = ({ label, onSearch }) => {
  const [inputText, setInputText] = useState("");

  return (
    <div style={styles.main}>
      <label>
        {label}:{" "}
        <input onChange={(e) => setInputText(e.target.value)} name="myInput" />
      </label>
      <Button
        onClick={(e) => onSearch(inputText)}
        type="submit"
        variant="contained"
        color="primary"
      >
        Search
      </Button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-around",
    margin: "20px 150px",
  },
};

export default SearchBar;
