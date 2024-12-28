import { cn } from "@/lib/utils";
import { splitProps } from "solid-js";
import type { ComponentProps } from "solid-js";

interface HeaderProps extends ComponentProps<"header"> {}

export const Header = (props: HeaderProps) => {
  const [local, rest] = splitProps(props, ["class", "children"]);

  return (
    <header
      class={cn(
        "fixed top-0 z-50 w-full bg-background/80 text-foreground backdrop-blur-sm",
        local.class,
      )}
      {...rest}
    >
      <div class="container mx-auto px-4 py-4">{local.children}</div>
    </header>
  );
};
