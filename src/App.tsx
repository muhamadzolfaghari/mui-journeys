import { Grid } from "@mui/material";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Grid container sx={{ width: "100%", height: "calc(100vh)" }}>
        <Grid item md={6} xs={12} sx={{ backgroundColor: "orange" }}>
          col1
        </Grid>
        <Grid
          item
          container
          md={6}
          xs={12}
          sx={{ backgroundColor: "green", p: 5 }}
        >
          <Grid item container md={12}>
            <Grid item md={6} xs={12} sx={{ backgroundColor: "red" }}>
              sub col1
            </Grid>
            <Grid item md={6} xs={12} sx={{ backgroundColor: "blue" }}>
              sub col2
            </Grid>
          </Grid>
          <Grid item container md={12}>
            <Grid item md={6} xs={12} sx={{ backgroundColor: "#475841" }}>
              sub col3
            </Grid>
            <Grid item md={6} xs={12} sx={{ backgroundColor: "#954212" }}>
              sub col4
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default App;
