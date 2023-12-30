import {
  Box,
  Typography,
  UseMediaQueryOptions,
  useMediaQuery,
} from "@mui/material";
import Layout from "../components/Layout";
import theme from "../lib/theme";

const StatelessBreakpoints = () => {
  const sm = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  console.log("component is rendered");

  return (
    <Layout>
      <Typography>مثالهای Responsive With Hook</Typography>
      <Box
        bgcolor={{
          xs: "purple",
          sm: "red",
          md: "green",
          lg: "blue",
          xl: "yellow",
        }}
        height={50}
        width={50}
        mb={3}
      ></Box>
      <Box
        width={{ sm: 40, md: 80, lg: 140 }}
        height={70}
        bgcolor={"green"}
        mb={3}
      ></Box>
      <Typography
        sx={{
          fontSize: { sm: 40, md: 80 },
          color: { sm: "red" },
        }}
      >
        Test
      </Typography>
      <Typography
        sx={(theme) => ({
          fontSize: 80,
          color: "red",
          [theme.breakpoints.down("md")]: {
            fontSize: 40,
            color: "yellow",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: 20,
            color: "green",
          },
        })}
      >
        Test
      </Typography>
    </Layout>
  );
};

export default StatelessBreakpoints;
