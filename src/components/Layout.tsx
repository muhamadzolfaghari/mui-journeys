import { Container, Toolbar } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "./Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Toolbar sx={{ mb: 3 }} />
      <Container sx={{ height: "inherit" }}>{children}</Container>
    </>
  );
}
