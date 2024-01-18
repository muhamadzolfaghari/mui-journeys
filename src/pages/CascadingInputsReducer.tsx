import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { FormEvent, useEffect, useReducer, useState } from "react";
import Layout from "../components/Layout";

interface Field {
  value: string;
  error: string;
}

interface State {
  name: Field;
  username: Field;
  password: Field;
  confirmedPassword: Field;
}

type Action =
  | {
      payload: { field: keyof State; value: string };
      type: "changed_field_value";
    }
  | {
      payload: { field: keyof State; error: string };
      type: "changed_field_error";
    };

function fieldReducer(state: State, action: Action) {
  switch (action.type) {
    case "changed_field_value":
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          value: action.payload.value,
        },
      };
    case "changed_field_error":
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          error: action.payload.error,
        },
      };
  }
}

const initialState: State = {
  name: {
    value: "",
    error: "",
  },
  username: {
    value: "",
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
  confirmedPassword: {
    value: "",
    error: "",
  },
};

const CascadingInputsReducer = () => {
  const [state, dispatch] = useReducer(fieldReducer, initialState);

  useEffect(() => {
    if (!state.name.value) {
      dispatch({
        type: "changed_field_error",
        payload: {
          field: "name",
          error: "فیلد نام نباید خالی باشد",
        },
      });
    }

    if (state.name.value) {
      dispatch({
        type: "changed_field_error",
        payload: {
          field: "name",
          error: "",
        },
      });
    }

    if (!state.username.value) {
      dispatch({
        type: "changed_field_error",
        payload: {
          field: "username",
          error: "فیلد نام کاربری نباید خالی باشد",
        },
      });
    }

    if (state.username.value) {
      dispatch({
        type: "changed_field_error",
        payload: {
          field: "username",
          error: "",
        },
      });
    }

    if (!state.password.value) {
      dispatch({
        type: "changed_field_error",
        payload: {
          field: "password",
          error: "فیلد رمز عبور نباید خالی باشد",
        },
      });
    }

    if (state.password.value) {
      dispatch({
        type: "changed_field_error",
        payload: {
          field: "password",
          error: "",
        },
      });
    }

    if (state.password.value.includes(state.username.value)) {
      dispatch({
        type: "changed_field_error",
        payload: {
          field: "password",
          error: "رمز عبور نباید حاوی نام کاربری باشد",
        },
      });
    }

    if (!state.confirmedPassword.value) {
      dispatch({
        type: "changed_field_error",
        payload: {
          field: "confirmedPassword",
          error: "فیلد تایید رمز عبور نباید خالی باشد",
        },
      });
    }

    if (state.confirmedPassword.value) {
      dispatch({
        type: "changed_field_error",
        payload: {
          field: "confirmedPassword",
          error: "",
        },
      });
    }

    if (!state.confirmedPassword.value.includes(state.password.value)) {
      dispatch({
        type: "changed_field_error",
        payload: {
          field: "confirmedPassword",
          error: "رمز عبور با تکرار آن برابر نیست",
        },
      });
    }
  }, [state]);

  const handleChange =
    (field: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      dispatch({
        type: "changed_field_value",
        payload: {
          field,
          value,
        },
      });
    };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <Paper onSubmit={handleSubmit} sx={{ width: 350, m: "auto", p: 3 }}>
        <TextField
          value={state.name.value}
          onChange={handleChange("name")}
          size="small"
          label="نام"
          fullWidth
          sx={{ mb: 2 }}
          error={!!state.name.error}
          helperText={state.name.error}
        />
        <TextField
          value={state.username.value}
          onChange={handleChange("password")}
          size="small"
          label="نام کاربری"
          fullWidth
          sx={{ mb: 2 }}
          error={!!state.username.error}
          helperText={state.username.error}
        />
        <TextField
          value={state.password.value}
          onChange={handleChange("password")}
          size="small"
          label="رمزعبور"
          fullWidth
          sx={{ mb: 2 }}
          error={!!state.password.error}
          helperText={state.password.error}
        />
        <TextField
          value={state.confirmedPassword.value}
          onChange={handleChange("confirmedPassword")}
          size="small"
          label="تکرار رمزعبور"
          fullWidth
          sx={{ mb: 2 }}
          error={!!state.confirmedPassword.error}
          helperText={state.confirmedPassword.error}
        />
        <Button variant="contained">ثبت نام</Button>
      </Paper>
    </Layout>
  );
};

export default CascadingInputsReducer;
