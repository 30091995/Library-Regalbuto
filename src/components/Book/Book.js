import { Link } from "react-router-dom";

export const Book = ({ titolo, autore, id }) => {
  return (
    <li>
      <Link to={`/book/${id}`}>
        {titolo} {autore}
      </Link>
    </li>
  );
};
