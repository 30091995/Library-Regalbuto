import React from "react";
import { Book } from "../../../components/Book";
import { fetchBooks } from "../utils";

export const BookList = () => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchBooks();
        setBooks(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  if (!books.length) {
    return "loading";
  }

  return (
    <ul>
      {books.map(({ fields, sys }, index) => (
        <Book {...fields} id={sys.id} key={index} />
      ))}
    </ul>
  );
};
