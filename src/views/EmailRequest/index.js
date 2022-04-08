import { useParams } from "react-router-dom";

export const EmailRequest = () => {
  const { bookId } = useParams();

  return <>{bookId}</>;
};
