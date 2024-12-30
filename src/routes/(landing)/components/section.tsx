import { cva } from "@/lib/cva";
import { cn } from "@/lib/utils";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "cva";
import {
  type ComponentProps,
  type ValidComponent,
  mergeProps,
  splitProps,
} from "solid-js";
import { Dynamic } from "solid-js/web";

const sectionVariants = cva({
  base: "",
  variants: {
    variant: {
      default: "bg-background text-foreground",
      secondary: "bg-secondary text-secondary-foreground",
    },
    size: {
      default: "py-24",
      hero: "pt-32 pb-16",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type SectionProps<T extends ValidComponent = "section"> = ComponentProps<T> &
  VariantProps<typeof sectionVariants> & { as?: T };

export const Section = <T extends ValidComponent = "section">(
  props: SectionProps<T>,
) => {
  const [local, rest] = splitProps(
    mergeProps({ as: "section" }, props) as SectionProps,
    ["as", "class", "children", "size", "variant"],
  );

  return (
    <Dynamic
      component={local.as ?? "section"}
      class={cn(
        sectionVariants({
          size: local.size,
          variant: local.variant,
        }),
        local.class,
      )}
      {...rest}
    >
      <div class="container mx-auto px-4">{local.children}</div>
    </Dynamic>
  );
};

type SectionHeaderProps<T extends ValidComponent = "div"> =
  ComponentProps<T> & {
    as?: T;
  };

export const SectionHeader = <T extends ValidComponent = "div">(
  props: SectionHeaderProps<T>,
) => {
  const [local, rest] = splitProps(
    mergeProps({ as: "div" }, props) as SectionHeaderProps,
    ["as", "class", "children"],
  );

  return (
    <Dynamic
      component={local.as ?? "div"}
      class={cn("mx-auto mb-16 max-w-3xl text-center", local.class)}
      {...rest}
    >
      {local.children}
    </Dynamic>
  );
};

type SectionTitleProps<T extends ValidComponent = "h2"> = ComponentProps<T> & {
  as?: T;
};

export const SectionTitle = <T extends ValidComponent = "h2">(
  props: SectionTitleProps<T>,
) => {
  const [local, rest] = splitProps(
    mergeProps({ as: "h2" }, props) as SectionTitleProps,
    ["as", "class", "children"],
  );

  return (
    <Dynamic
      component={local.as ?? "h2"}
      class={cn("mb-4 font-bold text-3xl", local.class)}
      {...rest}
    >
      {local.children}
    </Dynamic>
  );
};

type SectionSubtitleProps<T extends ValidComponent = "p"> =
  ComponentProps<T> & {
    as?: T;
  };

export const SectionSubtitle = <T extends ValidComponent = "p">(
  props: SectionSubtitleProps<T>,
) => {
  const [local, rest] = splitProps(
    mergeProps(
      { as: "p" } satisfies SectionSubtitleProps,
      props,
    ) as SectionSubtitleProps,
    ["as", "class", "children"],
  );

  return (
    <Dynamic
      component={local.as ?? "p"}
      class={cn("text-seaform-600", local.class)}
      {...rest}
    >
      {local.children}
    </Dynamic>
  );
};

type SectionContentProps<T extends ValidComponent = "div"> =
  ComponentProps<T> & { as?: T };

export const SectionContent = <T extends ValidComponent = "div">(
  props: SectionContentProps<T>,
) => {
  const [local, rest] = splitProps(
    mergeProps({ as: "div" }, props) as SectionContentProps,
    ["as", "class", "children"],
  );

  return (
    <Dynamic
      component={local.as ?? "div"}
      class={cn("gap-4", local.class)}
      {...rest}
    >
      {local.children}
    </Dynamic>
  );
};
