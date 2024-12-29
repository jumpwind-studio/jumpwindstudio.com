import { Label } from "@/components/ui/label";
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldInput,
} from "@/components/ui/textfield";
import { createForm, valiForm } from "@modular-forms/solid";
import * as v from "valibot";

const GetStartedFormSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your email."),
    v.email("The email address is badly formatted."),
  ),
  name: v.string(),
});

type GetStartedForm = v.InferOutput<typeof GetStartedFormSchema>;

export default function ExamplePage() {
  const [, { Form, Field }] = createForm<GetStartedForm>({
    validate: valiForm(GetStartedFormSchema),
    validateOn: "submit",
    revalidateOn: "change",
  });

  return (
    <main class="relative mx-auto flex w-full max-w-[64rem] grow flex-col gap-8 px-6 py-8 md:gap-10 md:py-10 lg:gap-12 lg:px-8 lg:py-12">
      <div class="flex w-full flex-col items-start gap-y-2 text-start">
        <h1 class="text-pretty bg-linear-to-b from-foreground to-foreground/75 bg-clip-text font-display font-semibold text-3xl text-transparent tracking-tight md:text-4xl">
          Submit your Open Source Software
        </h1>
        <h2 class="max-w-2xl text-pretty text-secondary md:text-lg [&[href]]:*:underline hover:[&[href]]:*:text-primary">
          Help us grow the list of open source alternatives to proprietary
          software. Contribute to OpenAlternative by submitting a new open
          source alternative.
        </h2>
      </div>
      <div class="grid grid-cols-1 items-start gap-6 md:grid-cols-3 lg:gap-8">
        <div class="flex flex-col gap-8 md:col-span-2 md:gap-10 lg:gap-12">
          <Form class="grid w-full gap-5 sm:grid-cols-2">
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
            <div class="col-span-full">
              <button
                type="submit"
                class="group/button relative flex min-w-32 cursor-pointer items-center justify-center gap-[1ch] rounded-lg border border-transparent! bg-foreground px-4 py-2.5 text-start font-medium text-[0.8125rem] text-background leading-tight hover:z-10 hover:border-border-dark hover:opacity-90 hover:ring-[3px] hover:ring-border/40 focus-visible:border-border-dark focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-border/40 disabled:pointer-events-none disabled:opacity-60 sm:text-sm"
              >
                <span class="flex-1 truncate only:text-center">Submit</span>
              </button>
            </div>
          </Form>
        </div>
        <div class="flex w-full flex-col gap-6 md:sticky md:top-16 md:z-10">
          <div class="relative flex w-full transform-gpu flex-col items-start gap-4 rounded-lg border bg-card p-5 focus-visible:border-border-dark focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-border/40 hover:[&[href]]:bg-card-dark">
            <div class="prose prose-neutral dark:prose-invert prose-code:mx-[0.088em] prose-li:mt-2 prose-headings:scroll-mt-20 text-pretty prose-code:rounded prose-img:rounded-md prose-pre:rounded-none prose-img:border prose-hr:border-foreground prose-img:border-neutral-200 prose-code:bg-foreground/10 prose-code:px-[0.33em] prose-code:py-[0.166em] prose-a:font-normal prose-code:font-normal prose-h5:font-medium prose-h6:font-medium prose-headings:font-semibold prose-pre:font-mono prose-a:text-foreground prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-base prose-h6:text-sm prose-headings:text-foreground prose-lead:text-lg/relaxed prose-strong:text-foreground text-secondary text-sm/normal prose-h5:tracking-micro prose-h6:tracking-normal prose-headings:tracking-tight prose-code:before:hidden prose-code:after:hidden prose-li:first:m-0 prose-p:first:mt-0 prose-ul:first:mt-0 prose-p:last:mb-0 prose-ul:last:mb-0 prose-a:hover:text-primary md:prose-h1:text-4xl md:prose-h2:text-3xl">
              <p>
                <strong>Note:</strong> Submission alone does not guarantee a
                feature. Please make sure the software you're submitting is:
              </p>
              <ul class="list-inside p-0 [&_li]:p-0">
                <li>Open source</li>
                <li>Free to use or can be self-hosted</li>
                <li>Actively maintained</li>
                <li>
                  An <a href="/alternatives">alternative to popular software</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// {/* <div class="flex flex-col items-start gap-2"> */}
// {/*   <label */}
// {/*     class="block font-medium text-foreground text-sm after:ml-0.5 after:text-red-600 after:content-['*'] [&[for]]:cursor-pointer" */}
// {/*     aria-label="Label" */}
// {/*     for=":r1:-form-item" */}
// {/*   > */}
// {/*     Your Email: */}
// {/*   </label> */}
// {/*   <input */}
// {/*     class="min-h-0 appearance-none self-stretch truncate break-words rounded-lg border bg-background px-4 py-2.5 font-medium text-[0.8125rem] text-secondary leading-tight transition duration-150 focus-visible:border-border-dark focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-border/40 disabled:text-secondary/50 sm:text-sm" */}
// {/*     placeholder="john@doe.com" */}
// {/*     data-1p-ignore="true" */}
// {/*     id=":r1:-form-item" */}
// {/*     aria-describedby=":r1:-form-item-description" */}
// {/*     aria-invalid="false" */}
// {/*     type="email" */}
// {/*     value="" */}
// {/*     name="submitterEmail" */}
// {/*   /> */}
// {/* </div> */}
// {/* <div class="flex flex-col items-start gap-2"> */}
// {/*   <label */}
// {/*     class="block font-medium text-foreground text-sm after:ml-0.5 after:text-red-600 after:content-['*'] [&[for]]:cursor-pointer" */}
// {/*     aria-label="Label" */}
// {/*     for=":r2:-form-item" */}
// {/*   > */}
// {/*     Name: */}
// {/*   </label> */}
// {/*   <input */}
// {/*     class="min-h-0 appearance-none self-stretch truncate break-words rounded-lg border bg-background px-4 py-2.5 font-medium text-[0.8125rem] text-secondary leading-tight transition duration-150 focus-visible:border-border-dark focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-border/40 disabled:text-secondary/50 sm:text-sm" */}
// {/*     placeholder="PostHog" */}
// {/*     data-1p-ignore="true" */}
// {/*     id=":r2:-form-item" */}
// {/*     aria-describedby=":r2:-form-item-description" */}
// {/*     aria-invalid="false" */}
// {/*     type="text" */}
// {/*     value="" */}
// {/*     name="name" */}
// {/*   /> */}
// {/* </div> */}
// {/* <div class="flex flex-col items-start gap-2"> */}
// {/*   <label */}
// {/*     class="block font-medium text-foreground text-sm after:ml-0.5 after:text-red-600 after:content-['*'] [&[for]]:cursor-pointer" */}
// {/*     aria-label="Label" */}
// {/*     for=":r3:-form-item" */}
// {/*   > */}
// {/*     Website URL: */}
// {/*   </label> */}
// {/*   <input */}
// {/*     class="min-h-0 appearance-none self-stretch truncate break-words rounded-lg border bg-background px-4 py-2.5 font-medium text-[0.8125rem] text-secondary leading-tight transition duration-150 focus-visible:border-border-dark focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-border/40 disabled:text-secondary/50 sm:text-sm" */}
// {/*     placeholder="https://posthog.com" */}
// {/*     id=":r3:-form-item" */}
// {/*     aria-describedby=":r3:-form-item-description" */}
// {/*     aria-invalid="false" */}
// {/*     type="url" */}
// {/*     value="" */}
// {/*     name="website" */}
// {/*   /> */}
// {/* </div> */}
// {/* <div class="col-span-full flex flex-col items-start gap-2"> */}
// {/*   <label */}
// {/*     class="block font-medium text-foreground text-sm after:ml-0.5 after:text-red-600 after:content-['*'] [&[for]]:cursor-pointer" */}
// {/*     aria-label="Label" */}
// {/*     for=":r4:-form-item" */}
// {/*   > */}
// {/*     Repository URL: */}
// {/*   </label> */}
// {/*   <input */}
// {/*     class="min-h-0 appearance-none self-stretch truncate break-words rounded-lg border bg-background px-4 py-2.5 font-medium text-[0.8125rem] text-secondary leading-tight transition duration-150 focus-visible:border-border-dark focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-border/40 disabled:text-secondary/50 sm:text-sm" */}
// {/*     placeholder="https://github.com/posthog/posthog" */}
// {/*     id=":r4:-form-item" */}
// {/*     aria-describedby=":r4:-form-item-description" */}
// {/*     aria-invalid="false" */}
// {/*     type="url" */}
// {/*     value="" */}
// {/*     name="repository" */}
// {/*   /> */}
// {/* </div> */}
// {/* <div class="col-span-full flex flex-col items-start gap-2"> */}
// {/*   <label */}
// {/*     class="block font-medium text-foreground text-sm [&[for]]:cursor-pointer" */}
// {/*     aria-label="Label" */}
// {/*     for=":r5:-form-item" */}
// {/*   > */}
// {/*     Suggest an alternative: */}
// {/*   </label> */}
// {/*   <input */}
// {/*     class="min-h-0 appearance-none self-stretch truncate break-words rounded-lg border bg-background px-4 py-2.5 font-medium text-[0.8125rem] text-secondary leading-tight transition duration-150 focus-visible:border-border-dark focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-border/40 disabled:text-secondary/50 sm:text-sm" */}
// {/*     placeholder="Which well-known tool is this an alternative to?" */}
// {/*     id=":r5:-form-item" */}
// {/*     aria-describedby=":r5:-form-item-description" */}
// {/*     aria-invalid="false" */}
// {/*     type="text" */}
// {/*     value="" */}
// {/*     name="submitterNote" */}
// {/*   /> */}
// {/* </div> */}

export function ExampleFooter() {
  return (
    <footer class="mt-auto flex flex-col gap-y-8 border-foreground/10 border-t pt-8 md:pt-10 lg:pt-12">
      <div class="grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-[repeat(16,minmax(0,1fr))] md:gap-x-6">
        <div class="col-span-full flex flex-col items-start gap-4 md:col-span-6">
          <div class="flex min-w-0 max-w-64 flex-col items-start gap-x-4 gap-y-3">
            <strong class="px-0.5 font-display font-medium text-base tracking-micro">
              Subscribe to our newsletter
            </strong>
            <p class="-mt-2 px-0.5 text-muted text-sm first:mt-0">
              Join 2,100+ other members and get updates on new open source
              tools.
            </p>
            <form class="flex w-full flex-col gap-3" novalidate>
              <div class="flex w-full overflow-clip rounded-lg border focus-within:border-border-dark focus-within:outline-hidden focus-within:ring-[3px] focus-within:ring-border/40">
                <input
                  class="min-h-0 min-w-0 flex-1 appearance-none self-stretch truncate break-words rounded-md border bg-background px-3 py-2 font-medium text-[0.8125rem] text-secondary leading-tight outline-0 ring-0! transition duration-150 focus-visible:border-border-dark focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-border/40 disabled:text-secondary/50"
                  type="email"
                  placeholder="Enter your email"
                  required
                  data-1p-ignore="true"
                  id="undefined-form-item"
                  aria-describedby="undefined-form-item-description"
                  aria-invalid="false"
                  name="email"
                  value=""
                />
              </div>
            </form>
          </div>
          <div class="flex flex-row flex-wrap place-content-start items-center gap-x-3 gap-y-2 text-sm/normal">
            <button
              type="button"
              id="radix-:Romplrb:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              aria-label="RSS Feeds"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-rss size-[1.44em] stroke-[1.25] text-muted hover:text-foreground"
              >
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
            </button>
            <a
              class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
              target="_blank"
              rel="nofollow noreferrer"
              aria-label="Contact us"
              data-state="closed"
              href="mailto:hello@openalternative.co"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-at-sign size-[1.44em] stroke-[1.25]"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
              </svg>
            </a>
            <a
              class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
              target="_blank"
              rel="nofollow noreferrer"
              data-state="closed"
              href="https://x.com/ossalternative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                role="img"
                aria-label="X Icon"
                class="size-[1.44em] stroke-[1.25]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a
              class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
              target="_blank"
              rel="nofollow noreferrer"
              data-state="closed"
              href="https://bsky.app/profile/openalternative.co"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                role="img"
                aria-label="Bluesky Icon"
                class="size-[1.44em] stroke-[1.25]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" />
              </svg>
            </a>
            <a
              class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
              target="_blank"
              rel="nofollow noreferrer"
              data-state="closed"
              href="https://linkedin.com/company/openalternative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                role="img"
                aria-label="LinkedIn Icon"
                class="size-[1.44em] stroke-[1.25]"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
              target="_blank"
              rel="nofollow noreferrer"
              data-state="closed"
              href="https://github.com/piotrkulpinski/openalternative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                role="img"
                aria-label="GitHub Icon"
                class="size-[1.44em] stroke-[1.25]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col items-start gap-x-3 gap-y-2 text-sm/normal md:col-span-3 md:col-start-8">
          <strong class="font-display font-medium text-sm">Browse:</strong>
          <a
            class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
            href="/alternatives"
          >
            Alternatives
          </a>
          <a
            class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
            href="/categories"
          >
            Categories
          </a>
          <a
            class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
            href="/stacks"
          >
            Tech Stacks
          </a>
          <a
            class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
            href="/topics"
          >
            Topics
          </a>
          <a
            class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
            href="/licenses"
          >
            Licenses
          </a>
        </div>
        <div class="flex flex-col items-start gap-x-3 gap-y-2 text-sm/normal md:col-span-3">
          <strong class="font-display font-medium text-sm">Quick Links:</strong>
          <a
            class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
            href="/about"
          >
            About Us
          </a>
          <a
            class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
            href="/blog"
          >
            Blog
          </a>
          <a
            class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
            href="/advertise"
          >
            Advertise
          </a>
          <a
            class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 font-medium text-foreground text-sm hover:text-foreground disabled:opacity-50"
            href="/submit"
          >
            Add a Free Listing
          </a>
          <a
            class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
            href="/tools/github-stack-analyzer"
          >
            Stack Analyzer
          </a>
        </div>
        <div class="flex flex-col items-start gap-x-3 gap-y-2 text-sm/normal md:col-span-3">
          <div class="flex flex-col items-start gap-x-3 gap-y-2">
            <strong class="font-display font-medium text-sm">
              Other Products:
            </strong>
            <a
              class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
              target="_blank"
              rel="noreferrer noopener"
              title="Find the perfect developer tools for your next project"
              href="https://devsuite.co/?ref=openalternative"
            >
              DevSuite
            </a>
            <a
              class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
              target="_blank"
              rel="noreferrer noopener"
              title="No-code directory website builder"
              href="https://superstash.co/?ref=openalternative"
            >
              Superstash
            </a>
            <a
              class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-sm hover:text-foreground disabled:opacity-50"
              target="_blank"
              rel="noreferrer noopener"
              title="Build directory websites in WordPress"
              href="https://chipmunktheme.com/?ref=openalternative"
            >
              Chipmunk Theme
            </a>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-row flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <a
          class="group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-muted text-xs hover:text-foreground disabled:opacity-50"
          target="_blank"
          rel="noopener noreferrer"
          href="https://kulpinski.pl"
        >
          <img
            src="/authors/piotrkulpinski.webp"
            alt="Piotr Kulpinski"
            loading="lazy"
            width="16"
            height="16"
            decoding="async"
            class="size-4 rounded-full max-sm:hidden"
          />
          <p class="text-muted text-xs">
            This website may contain affiliate links
          </p>
        </a>
      </div>
    </footer>
  );
}
