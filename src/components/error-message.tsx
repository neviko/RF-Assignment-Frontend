import React from "react";

interface ErrorMessageProps {
  errors: string[];
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errors }) => {
  return (
    <div>
      {errors.map((error) => {
        return <div style={styles.errorMessage}>{error}</div>;
      })}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  errorMessage: {
    color: "red",
  },
};
export default ErrorMessage;
