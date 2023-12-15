import { Button, Paper, Stack, TextField } from "@mui/material";
import Layout from "../components/Layout";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <Layout>
      <Paper sx={{ borderRadius: 8, mt: 20, p: 6 }}>
        <Stack component={"form"} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                value={value}
                label="ایمیل"
                sx={{ mb: 3 }}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                value={value}
                label="رمزعبور"
                type="password"
                sx={{ mb: 3 }}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
            name="password"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ pt: 1, pb: 1 }}
            // disabled={!isValid}
          >
            ورود
          </Button>
        </Stack>
      </Paper>
    </Layout>
  );
}
