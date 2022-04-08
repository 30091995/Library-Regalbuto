import React from "react";
import { BookList } from "./components/BookList";
import { Layout } from "../../components/Layout/Layout";

export const Home = () => {
  return (
    <Layout>
      <h1>Libreria</h1>
      <br />
      <BookList />
    </Layout>
  );
};
