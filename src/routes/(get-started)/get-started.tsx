import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createForm, valiForm } from "@modular-forms/solid";
import * as v from "valibot";

const ContactFormSchema = v.object({
  email: v.pipe(v.string(), v.email()),
  name: v.string(),
  message: v.string(),
});

type ContactForm = v.InferOutput<typeof ContactFormSchema>;

export default function GetStarted() {
  const [, { Form, Field }] = createForm<ContactForm>({
    validate: valiForm(ContactFormSchema),
  });

  return (
    <main class="flex grow flex-col bg-background text-background">
      <div class="grid grid-cols-2">
        <Form>
          <Field name="email">
            {(field, props) => (
              <>
                <Input {...props} type="email" required />
                {field.error && <div>{field.error}</div>}
              </>
            )}
          </Field>
          <Field name="name">
            {(field, props) => (
              <>
                <Input {...props} type="text" required />
                {field.error && <div>{field.error}</div>}
              </>
            )}
          </Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </main>
  );
}
