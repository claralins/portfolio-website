import React from "react";
import { Link } from "react-router-dom";

const ButtonMailTo = ({ mailto, label }) => {
  return (
    <Link
      to="http://www.linkedin.com/in/clara-lins-gomes/"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailTo;
