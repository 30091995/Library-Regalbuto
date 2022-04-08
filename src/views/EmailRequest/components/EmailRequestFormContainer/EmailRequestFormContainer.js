import { useForm } from "react-hook-form";
import { EmailRequestFormDetails } from "../EmailRequestFormDetails";

export const EmailRequestFormContainer = () => {
  const onSubmit = (data) => console.log(data);
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailRequestFormDetails />
    </form>
  );
};
