import {
  TextField,
  TextFieldErrorMessage,
  TextFieldInput,
  TextFieldTextArea,
} from "@/components/ui/textfield";
import { Label } from "@kobalte/core/text-field";
import { createForm, valiForm } from "@modular-forms/solid";
import * as v from "valibot";

const ContactUsFormSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your email."),
    v.email("The email address is badly formatted."),
  ),
  name: v.string("Please enter your name."),
  message: v.string("Please enter your message."),
});

type ContactUsForm = v.InferOutput<typeof ContactUsFormSchema>;

export default function ContactUsPage() {
  const [, { Form, Field }] = createForm<ContactUsForm>({
    validate: valiForm(ContactUsFormSchema),
  });

  return (
    <main class="relative mx-auto flex w-full max-w-[64rem] grow flex-col gap-8 px-6 py-8 md:gap-10 md:py-10 lg:gap-12 lg:px-8 lg:py-12">
      <Form class="flex h-full flex-col items-center justify-center">
        <Field name="email">
          {(field, props) => (
            <TextField class="flex flex-col items-start gap-2">
              <Label
                for={field.name}
                class="block font-medium text-foreground text-sm after:ml-0.5 after:text-red-600 after:content-['*'] [&[for]]:cursor-pointer"
              >
                {props.name}
              </Label>
              <TextFieldInput
                {...props}
                id={field.name}
                value={field.value}
                type="email"
                class="min-h-0 appearance-none self-stretch truncate break-words rounded-lg border bg-background px-4 py-2.5 font-medium text-[0.8125rem] text-secondary leading-tight transition duration-150 invalid:ring-[3px] invalid:ring-destructive focus-visible:border-border-dark focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-border/40 disabled:text-secondary/50 sm:text-sm"
                aria-invalid={!!field.error}
                aria-errormessage={`${props.name}-error`}
              />
              <TextFieldErrorMessage>{field.error}</TextFieldErrorMessage>
            </TextField>
          )}
        </Field>
        <Field name="name">
          {(field, props) => (
            <TextField class="flex flex-col items-start gap-2">
              <Label
                for={field.name}
                class="block font-medium text-foreground text-sm after:ml-0.5 after:text-red-600 after:content-['*'] [&[for]]:cursor-pointer"
              >
                {props.name}
              </Label>
              <TextFieldInput
                {...props}
                id={field.name}
                value={field.value}
                class="min-h-0 appearance-none self-stretch truncate break-words rounded-lg border bg-background px-4 py-2.5 font-medium text-[0.8125rem] text-secondary leading-tight transition duration-150 invalid:ring-[3px] invalid:ring-destructive focus-visible:border-border-dark focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-border/40 disabled:text-secondary/50 sm:text-sm"
                aria-invalid={!!field.error}
                aria-errormessage={`${props.name}-error`}
              />
              <TextFieldErrorMessage>{field.error}</TextFieldErrorMessage>
            </TextField>
          )}
        </Field>
        <Field name="email">
          {(field, props) => (
            <TextField class="flex flex-col items-start gap-2">
              <Label
                for={field.name}
                class="block font-medium text-foreground text-sm after:ml-0.5 after:text-red-600 after:content-['*'] [&[for]]:cursor-pointer"
              >
                {props.name}
              </Label>
              <TextFieldTextArea
                {...props}
                id={field.name}
                value={field.value}
                class="min-h-0 appearance-none self-stretch truncate break-words rounded-lg border bg-background px-4 py-2.5 font-medium text-[0.8125rem] text-secondary leading-tight transition duration-150 invalid:ring-[3px] invalid:ring-destructive focus-visible:border-border-dark focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-border/40 disabled:text-secondary/50 sm:text-sm"
                aria-invalid={!!field.error}
                aria-errormessage={`${props.name}-error`}
              />
              <TextFieldErrorMessage>{field.error}</TextFieldErrorMessage>
            </TextField>
          )}
        </Field>
      </Form>
    </main>
  );
}
