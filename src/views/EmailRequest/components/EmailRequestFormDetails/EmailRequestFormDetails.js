import React from "react";
import { TextFieldCustom } from "../TextFieldCustom/TextFieldCustom";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "../../../../ThemeProvider/useTheme";

export const EmailRequestFormDetails = ({ book, control }) => {
  const { space } = useTheme();
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: space.space32,
      }}
    >
      <Typography variant="h4">
        Inserisci i dati per la richiesta del libro
      </Typography>
      <TextFieldCustom
        defaultValue={book.fields.titolo}
        label="Titolo"
        readOnly
        nameField="title"
        type="text"
        required
        control={control}
      />
      <TextFieldCustom
        label="Il tuo nome"
        nameField="name"
        type="text"
        required
        control={control}
      />
      <TextFieldCustom
        label="Il tuo cognome"
        nameField="surname"
        type="text"
        required
        control={control}
      />
      <TextFieldCustom
        label="La tua e-mail"
        nameField="email"
        type="email"
        required
        control={control}
      />
      <Button type="submit">Invia Richiesta</Button>
    </Box>
  );
};
