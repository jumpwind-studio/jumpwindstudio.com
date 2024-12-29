import {
  TextField,
  TextFieldErrorMessage,
  TextFieldInput,
  TextFieldLabel,
  TextFieldTextArea,
} from "@/components/ui/textfield";
import { Show, splitProps } from "solid-js";

import type {
  TextFieldInputProps as InputProps,
  TextFieldTextAreaProps as TextAreaProps,
  TextFieldProps,
} from "@/components/ui/textfield";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { ValidComponent } from "solid-js";

// Base props that are common to both variants
type BaseFormTextFieldProps<T extends ValidComponent = "div"> =
  TextFieldProps<T> & {
    error: string;
    label: string;
    placeholder?: string;
  };

// Input-specific props
type TextFieldInputProps<T extends ValidComponent = "div"> =
  BaseFormTextFieldProps<T> &
    InputProps<"input"> & {
      multiline?: false;
    };

// TextArea-specific props
type TextFieldTextAreaProps<T extends ValidComponent = "div"> =
  BaseFormTextFieldProps<T> &
    TextAreaProps<"textarea"> & {
      multiline: true;
    };

// Combined discriminated union type
// export type FormTextFieldProps<T extends ValidComponent = "div"> =
//   | InputFormTextFieldProps<T>
//   | TextAreaFormTextFieldProps<T>;

function isMultiline(
  props: TextFieldInputProps | TextFieldTextAreaProps,
): props is TextFieldTextAreaProps {
  return props?.multiline === true;
}

export const FormTextField = <T extends ValidComponent = "div">(
  props: TextFieldInputProps | TextFieldTextAreaProps,
) => {
  const [rootProps, textFieldProps, rest] = splitProps(
    isMultiline(props)
      ? (props as TextFieldTextAreaProps<T>)
      : (props as TextFieldInputProps<T>),
    // Root
    ["name", "value", "required", "disabled", "class"],
    // Input
    ["multiline", "placeholder", "ref", "onInput", "onChange", "onBlur"],
  );

  return (
    <TextField
      {...rootProps}
      validationState={rest.error ? "invalid" : "valid"}
    >
      <Show when={rest.label}>
        <TextFieldLabel>{rest.label}</TextFieldLabel>
      </Show>
      <Show
        when={props.multiline}
        fallback={<TextFieldInput {...textFieldProps} />}
      >
        <TextFieldTextArea {...textFieldProps} />
      </Show>
      <TextFieldErrorMessage>{rest.error}</TextFieldErrorMessage>
    </TextField>
  );
};
