import { useParams } from "react-router-dom";
import React from "react";
import { client } from "../../client";
import { EmailRequestFormContainer } from "./components/EmailRequestFormContainer";

export const EmailRequest = () => {
  const { bookId } = useParams();
  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    async function fetchBook() {
      const response = await client.getEntry(bookId);
      setBook(response);
    }
    fetchBook();
  }, [bookId]);

  if (!book) {
    return "loading";
  }
  return <EmailRequestFormContainer book={book} />;
};
