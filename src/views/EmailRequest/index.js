import { useParams } from "react-router-dom";
import React from "react";
import { client } from "../../client";

export const EmailRequest = () => {
  const { bookId } = useParams();
  const [book, setBook] = React.useState();

  React.useEffect(() => {
    async function fetchBook() {
      const response = await client.getEntry(bookId);
      setBook(response);
    }
    fetchBook();
  }, []);

  return <>{bookId}</>;
};
