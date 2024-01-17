import Box, { BoxProps } from "@mui/material/Box";
import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    Welcome to my website
    <ProposalBox position={"fixed"} inset={0} top={20} />
  </Layout>
);

export default Home;

// declare module "@mui/material" {
//   type BoxOwnProps = {
//     position?: "absolute";
//     inset: number;
//   };
// }

type AllowedPosition =
  | { position: "absolute"; inset: number }
  | { position: "fixed"; inset: number }
  | { inset?: number }; // just in case of ignore error;

const ProposalBox = ({ inset, ...rest }: BoxProps & AllowedPosition) => (
  <Box {...rest} sx={{ ...rest.sx, inset }} />
);
