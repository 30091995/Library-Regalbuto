import React from "react";
import {
  styled,
  outlinedInputClasses,
  inputLabelClasses,
  TextField,
} from "@mui/material";

const StyledTextField = styled(TextField)({
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

export const TextFieldCustom = ({ label, defaultValue, readOnly }) => {
  return (
    <StyledTextField
      label={label}
      variant="outlined"
      defaultValue={defaultValue && defaultValue}
      InputLabelProps={{
        readOnly: readOnly,
        "aria-readonly": readOnly ? true : undefined,
      }}
    />
  );
};
