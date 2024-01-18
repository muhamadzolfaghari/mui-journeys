import Box, { BoxProps } from "@mui/material/Box";
import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    Welcome to my website
    <ProposalBox position={"fixed"} inset={0} top={20} />
  </Layout>
);

export default Home;
