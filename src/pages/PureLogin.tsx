import { Button, Paper, Stack, TextField } from "@mui/material";
import Layout from "../components/Layout";
import { ChangeEvent, useEffect, useRef, useState, FormEvent } from "react";

const isEmailValid = (value: string) => /.+@.+\..+/.test(value);

const isPasswordValid = (value: string) => /[a-zA-Z0-9]{6,}/.test(value);

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [emailErrorMessge, setEmailErrorMessage] = useState<string>();
  const [passwordErrorMessge, setPasswordErrorMessage] = useState<string>();
  const isDirty = useRef(true);

  useEffect(() => {
    if (!isDirty.current) {
      return;
    }

    let newIsValid = true;

    if (!isEmailValid(email)) {
      newIsValid = false;
    }

    if (!isPasswordValid(password)) {
      newIsValid = false;
    }

    setIsValid(newIsValid);
  }, [email, password]);

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    if (!isDirty.current) {
      isDirty.current = true;
    }

    setEmail(event.target.value);

    if (!isEmailValid(email)) {
      setEmailErrorMessage("ایمیل شما معتبر نیست");
    } else {
      setEmailErrorMessage(undefined);
    }
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    if (!isDirty.current) {
      isDirty.current = true;
    }

    setPassword(event.target.value);

    if (!isPasswordValid(password)) {
      setPasswordErrorMessage("رمز عبور شما معتبر نیست");
    } else {
      setPasswordErrorMessage(undefined);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log({
      email,
      password,
    });
  }

  return (
    <Layout>
      <Paper sx={{ borderRadius: 8, mt: 20, p: 6 }}>
        <Stack component={"form"} onSubmit={handleSubmit}>
          <TextField
            value={email}
            label="ایمیل"
            sx={{ mb: 3 }}
            error={Boolean(emailErrorMessge)}
            helperText={emailErrorMessge}
            onChange={handleEmailChange}
          />
          <TextField
            value={password}
            label="رمزعبور"
            type="password"
            sx={{ mb: 3 }}
            error={Boolean(passwordErrorMessge)}
            helperText={passwordErrorMessge}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ pt: 1, pb: 1 }}
            disabled={!isValid}
          >
            ورود
          </Button>
        </Stack>
      </Paper>
    </Layout>
  );
}