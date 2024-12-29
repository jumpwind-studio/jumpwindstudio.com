import { cn } from "@/lib/utils";
import * as TextFieldPrimitive from "@kobalte/core/text-field";
import { cva } from "cva";
import { splitProps } from "solid-js";
import { Label } from "./label";

import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { ValidComponent } from "solid-js";

export type TextFieldProps<T extends ValidComponent = "div"> =
  TextFieldPrimitive.TextFieldRootProps<T> & {
    class?: string;
  };

export const TextField = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldProps<T>>,
) => {
  const [local, rest] = splitProps(props as TextFieldProps, ["class"]);

  return (
    <TextFieldPrimitive.Root class={cn("space-y-1", local.class)} {...rest} />
  );
};

export const textfieldLabel = cva({
  base: "text-sm data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 font-medium",
  variants: {
    label: {
      true: "data-[invalid]:text-destructive",
    },
    error: {
      true: "text-destructive",
    },
    description: {
      true: "font-normal text-muted-foreground",
    },
  },
  defaultVariants: {
    label: true,
  },
});

export type TextFieldInputProps<T extends ValidComponent = "input"> =
  TextFieldPrimitive.TextFieldInputProps<T> & {
    class?: string;
  };

export const TextFieldInput = <T extends ValidComponent = "input">(
  props: PolymorphicProps<T, TextFieldInputProps<T>>,
) => {
  const [local, rest] = splitProps(props as TextFieldInputProps, ["class"]);

  return (
    <TextFieldPrimitive.Input
      class={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        local.class,
      )}
      {...rest}
    />
  );
};

export type TextFieldTextAreaProps<T extends ValidComponent = "textarea"> =
  TextFieldPrimitive.TextFieldTextAreaProps<T> & {
    class?: string;
  };

export const TextFieldTextArea = <T extends ValidComponent = "textarea">(
  props: PolymorphicProps<T, TextFieldTextAreaProps<T>>,
) => {
  const [local, rest] = splitProps(props as TextFieldTextAreaProps, ["class"]);

  return (
    <TextFieldPrimitive.TextArea
      class={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        local.class,
      )}
      {...rest}
    />
  );
};

export type TextFieldLabelProps = TextFieldPrimitive.TextFieldLabelProps & {
  class?: string;
};

export const TextFieldLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, TextFieldLabelProps>,
) => {
  const [local, rest] = splitProps(props as TextFieldLabelProps, ["class"]);

  return <TextFieldPrimitive.Label as={Label} class={local.class} {...rest} />;
};

export type TextFieldErrorMessageProps =
  TextFieldPrimitive.TextFieldErrorMessageProps & {
    class?: string;
  };

export const TextFieldErrorMessage = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldErrorMessageProps>,
) => {
  const [local, rest] = splitProps(props as TextFieldErrorMessageProps, [
    "class",
  ]);

  return (
    <TextFieldPrimitive.ErrorMessage
      class={cn(textfieldLabel({ error: true }), local.class)}
      {...rest}
    />
  );
};

export type TextFieldDescriptionProps =
  TextFieldPrimitive.TextFieldDescriptionProps & {
    class?: string;
  };

export const TextFieldDescription = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldDescriptionProps>,
) => {
  const [local, rest] = splitProps(props as TextFieldDescriptionProps, [
    "class",
  ]);

  return (
    <TextFieldPrimitive.Description
      class={cn(textfieldLabel({ description: true }), local.class)}
      {...rest}
    />
  );
};
