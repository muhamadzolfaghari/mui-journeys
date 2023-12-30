import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  UseMediaQueryOptions,
  useMediaQuery,
} from "@mui/material";
import Layout from "../components/Layout";
import theme from "../lib/theme";

type Theme = typeof theme;

declare module "@mui/material" {
  function useMediaQuery(
    queryInput: string | ((theme: Theme) => string),
    options?: UseMediaQueryOptions
  ): boolean;
}

const ResponsiveWithHook = () => {
  const sm = useMediaQuery((theme) => theme.breakpoints.between("xs", "md"));
  const lg = useMediaQuery((theme) => theme.breakpoints.up("md"));

  console.log("component is rendered");

  return (
    <Layout>
      {sm && <Box>mobile</Box>}
      {lg && <Box>desktop</Box>}
    </Layout>
  );
};

export default ResponsiveWithHook;
