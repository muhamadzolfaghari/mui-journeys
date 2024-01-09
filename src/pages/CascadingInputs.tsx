import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { FormEvent, useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";

const CascadingInputs = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmedPasswordError, setConfirmedPasswordError] =
    useState<string>("");

  useEffect(() => {
    if (!name) {
      setNameError("فیلد نام نباید خالی باشد");
    }

    if (name) {
      setNameError("");
    }

    if (!username) {
      setUsernameError("فیلد نام کاربری نباید خالی باشد");
    }

    if (username) {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("فیلد رمز عبور نباید خالی باشد");
    }

    if (password) {
      setPasswordError("");
    }

    if (password.includes(username)) {
      setPasswordError("رمز عبور نباید حاوی نام کاربری باشد");
    }

    if (!confirmedPassword) {
      setConfirmedPasswordError("فیلد تایید رمز عبور نباید خالی باشد");
    }

    if (confirmedPassword) {
      setConfirmedPasswordError("");
    }

    if (!confirmedPassword.includes(password)) {
      setConfirmedPasswordError("رمز عبور با تکرار آن برابر نیست");
    }
  }, [name, username, password, confirmedPassword]);

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };
  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUsername(value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleConfirmedPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setConfirmedPassword(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <Paper onSubmit={handleSubmit} sx={{ width: 350, m: "auto", p: 3 }}>
        <TextField
          value={name}
          onChange={handleName}
          size="small"
          label="نام"
          fullWidth
          sx={{ mb: 2 }}
          error={!!nameError}
          helperText={nameError}
        />
        <TextField
          value={username}
          onChange={handleUsername}
          size="small"
          label="نام کاربری"
          fullWidth
          sx={{ mb: 2 }}
          error={!!usernameError}
          helperText={usernameError}
        />
        <TextField
          value={password}
          onChange={handlePassword}
          size="small"
          label="رمزعبور"
          fullWidth
          sx={{ mb: 2 }}
          error={!!passwordError}
          helperText={passwordError}
        />
        <TextField
          value={confirmedPassword}
          onChange={handleConfirmedPassword}
          size="small"
          label="تکرار رمزعبور"
          fullWidth
          sx={{ mb: 2 }}
          error={!!confirmedPasswordError}
          helperText={confirmedPasswordError}
        />
        <Button variant="contained">ثبت نام</Button>
      </Paper>
    </Layout>
  );
};

export default CascadingInputs;
