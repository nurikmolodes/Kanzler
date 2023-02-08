import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "35px" }}>Такой страницы нет</h1>
      <Link style={{ textDecoration: "none", color: "blue" }} to={"/"}>
        Вернуться на главную страницу
      </Link>
    </div>
  );
};

export default ErrorPage;
