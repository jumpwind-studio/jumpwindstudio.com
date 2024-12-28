import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { A, useLocation } from "@solidjs/router";
import { createSelector, splitProps } from "solid-js";
import type { ComponentProps, VoidProps } from "solid-js";

interface NavProps extends VoidProps<ComponentProps<"nav">> {}

export const Nav = (props: NavProps) => {
  const [local, rest] = splitProps(props, ["class"]);

  const location = useLocation();
  const isActive = createSelector(() => location.pathname);

  return (
    <nav class={cn("flex items-center justify-between", local.class)} {...rest}>
      <A href="/" class="font-bold text-2xl">
        Jumpwind Studio
      </A>
      <div class="flex items-center gap-4">
        <A
          href="#"
          class="font-medium text-sm hover:underline"
          classList={{
            "font-bold": isActive("/") || isActive("/work"),
          }}
        >
          Work
        </A>
        <A href="#" class="font-medium text-sm hover:underline">
          Process
        </A>
        <A href="#" class="font-medium text-sm hover:underline">
          About
        </A>
        <Button>Get Started</Button>
      </div>
    </nav>
  );
};
