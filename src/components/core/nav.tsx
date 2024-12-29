import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { A, useLocation } from "@solidjs/router";
import { For, createSelector, splitProps } from "solid-js";
import type { ComponentProps, VoidProps } from "solid-js";

type NavItem = {
  href: string;
  text: string;
};

interface NavProps extends VoidProps<ComponentProps<"nav">> {}

export const Nav = (props: NavProps) => {
  const [local, rest] = splitProps(props, ["class"]);

  const location = useLocation();
  const isActive = createSelector(() => location.pathname);

  const items: NavItem[] = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/pricing", text: "Pricing" },
    { href: "/contact", text: "Contact" },
  ] as const;

  return (
    <nav class={cn("flex items-center justify-between", local.class)} {...rest}>
      <div>
        <A href="/" class="font-bold text-2xl">
          Jumpwind Studio
        </A>
      </div>
      <div class="flex items-center gap-20">
        <For each={items}>
          {(item) => (
            <A
              href={item.href}
              bool:data-active={isActive(item.href)}
              class="font-medium text-sm hover:underline data-[active]:text-emerald-300"
            >
              {item.text}
            </A>
          )}
        </For>
      </div>
      <div>
        <Button size="sm">Get Started</Button>
      </div>
    </nav>
  );
};
