import React from "react";
import {
  styled,
  outlinedInputClasses,
  inputLabelClasses,
  TextField,
} from "@mui/material";
import { useController } from "react-hook-form";

const StyledTextField = styled(TextField)({
  width: "500px",
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white",
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white",
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white",
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "white",
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "white",
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
    color: "white",
  },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "white",
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "white",
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "white",
  },
});

export const TextFieldCustom = ({
  label,
  defaultValue,
  readOnly,
  control,
  type,
  required,
  nameField,
}) => {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched },
  } = useController({
    name: nameField,
    control,
    rules: { required: required },
    defaultValue: defaultValue || "",
  });

  return (
    <StyledTextField
      label={label}
      variant="outlined"
      inputRef={ref}
      error={invalid || (invalid && isTouched)}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      type={type}
      InputProps={{
        readOnly: readOnly,
        "aria-readonly": readOnly,
      }}
    />
  );
};
