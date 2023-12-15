import { Button, Paper, Stack, TextField } from "@mui/material";
import Layout from "../components/Layout";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("ایمیل وارد شده صحیح نیست")
    .required("فیلد ایمیل اجباری است"),
  password: yup
    .string()
    .matches(/[a-zA-Z0-9]{6,}/, "رمز عبور اشتباه است")
    .required("ورود رمز عبور اجباری است"),
});

export default function Login() {
  const formik = useFormik<{ email: string; password: string }>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Layout>
      <Paper sx={{ borderRadius: 8, mt: 20, p: 6 }}>
        <Stack component={"form"} onSubmit={formik.handleSubmit}>
          <TextField
            name="email"
            value={formik.values.email}
            label="ایمیل"
            sx={{ mb: 3 }}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            name="password"
            value={formik.values.password}
            label="رمزعبور"
            type="password"
            sx={{ mb: 3 }}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ pt: 1, pb: 1 }}
            disabled={!formik.isValid}
          >
            ورود
          </Button>
        </Stack>
      </Paper>
    </Layout>
  );
}
