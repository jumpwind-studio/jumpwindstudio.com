import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { A } from "@solidjs/router";
import { MailIcon } from "lucide-solid";
import { For, splitProps } from "solid-js";
import type { ComponentProps } from "solid-js";

interface FooterProps extends ComponentProps<"footer"> {}

export const Footer = (props: FooterProps) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <footer
      class={cn(
        "space-y-8 bg-background pt-12 pb-4 text-foreground",
        local.class,
      )}
      {...rest}
    >
      <div class="container mx-auto px-4 pb-12">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 class="mb-4 font-bold text-lg">Jumpwind Studio</h3>
            <p class="text-foreground">
              Transforming mission-driven organizations with powerful digital
              platforms.
            </p>
          </div>
          <div>
            <h3 class="mb-4 font-bold text-lg">Contact</h3>
            <A
              href="mailto:hello@jumpwindstudio.com"
              class="flex items-center gap-2 text-foreground hover:text-white"
            >
              <MailIcon class="h-4 w-4" />
              hello@jumpwindstudio.com
            </A>
          </div>
          <div>
            <h3 class="mb-4 font-bold text-lg">Links</h3>
            <ul class="space-y-2 text-foreground">
              <For each={["Work", "Process", "About", "Contact"]}>
                {(item) => (
                  <li>
                    <A href="#" class="hover:text-white">
                      {item}
                    </A>
                  </li>
                )}
              </For>
            </ul>
          </div>

          <div>
            <h3 class="mb-4 font-bold text-lg">Newsletter</h3>
            <p class="mb-4 text-foreground">
              Get insights on mission-driven web development.
            </p>
            <form class="flex gap-2">
              <Input placeholder="Enter your email" />
              <Button variant="secondary">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
      <div class="border-primary border-t pt-4 text-center text-foreground">
        <p>
          &copy; {new Date().getFullYear()} Jumpwind Studio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
