import { useForm } from "react-hook-form";
import { EmailRequestFormDetails } from "../EmailRequestFormDetails";
import { Box } from "@mui/material";

export const EmailRequestFormContainer = ({ book }) => {
  const onSubmit = (data) => console.log(data);
  const { control, handleSubmit } = useForm();
  return (
    <Box height="100vh">
      <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
        <EmailRequestFormDetails book={book} control={control} />
      </form>
    </Box>
  );
};
