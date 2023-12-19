import { TextField, TextFieldProps, TextFieldVariants } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { Controller, Control } from "react-hook-form";

export interface TextFieldControllerProps<TV> extends TextFieldProps<TV extends TextFieldVariants ? TV === undefined ? "outlined" : TV> {
  variant: TV;
  control: Control;
}

function ControlledTextField(props: TextFieldControllerProps) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <TextField
          label={props.label}
          variant={props.variant || "outlined"}
          type={props.type || "text"}
          {...field}
          error={!!props.error}
          helperText={props.error?.message}
          InputProps={props.InputProps}
          fullWidth={props.fullWidth}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => {
            props.onChange?.(e);
            field.onChange(e);
          }}
          defaultValue={props.defaultValue}
        />
      )}
    />
  );
}

export default ControlledTextField;
