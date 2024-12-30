import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, Rocket, Users } from "lucide-solid";
import type { Component } from "solid-js";
import { type ComponentProps, For, splitProps } from "solid-js";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "./components/section";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const HeroSection = (props: ComponentProps<"section">) => {
  const [local, rest] = splitProps(props, ["class", "children"]);

  return (
    <Section
      variant="secondary"
      size="hero"
      class={cn("", local.class)}
      {...rest}
    >
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="space-y-8">
          <SectionTitle class="font-bold text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Transform Your Impact with a Website That Works
          </SectionTitle>
          <SectionSubtitle class="text-foreground text-lg">
            At Jumpwind Studio, we transform outdated websites into powerful
            digital platforms that amplify your message and expand your reach.
          </SectionSubtitle>
          <SectionContent class="flex flex-col gap-4 sm:flex-row">
            <div class="flex-1">
              <Input placeholder="Enter your email" />
            </div>
            <Button>
              Chat with us! <ArrowRight class="ml-2 h-4 w-4" />
            </Button>
          </SectionContent>
        </div>
        <div class="relative h-[600px]">
          <img
            src="/images/placeholder.png?height=600&width=800"
            alt="Website mockup"
            width={800}
            height={600}
            class="absolute rotate-6 transform rounded-xl shadow-2xl"
          />
          <img
            src="/images/placeholder.png?height=300&width=400"
            alt="Mobile mockup"
            width={400}
            height={300}
            class="-left-12 -rotate-12 absolute bottom-0 transform rounded-xl shadow-2xl"
          />
        </div>
      </div>

      <div class="container mx-auto mt-24 px-4">
        <div class="border-white/10 border-t pt-8">
          <p class="mb-6 text-foreground text-sm">
            Trusted by mission-driven organizations
          </p>
          <div class="grid grid-cols-2 items-center gap-8 opacity-70 md:grid-cols-4 lg:grid-cols-6">
            <For each={Array.from({ length: 6 })}>
              {(_, i) => (
                <div class="h-8">
                  <img
                    src="/placeholder.svg?height=32&width=120"
                    alt={`Client logo ${i() + 1}`}
                    width={120}
                    height={32}
                    class="h-full w-auto"
                  />
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </Section>
  );
};

export function ProcessSection(props: ComponentProps<"section">) {
  const [local, rest] = splitProps(props, ["class"]);

  const steps = () =>
    [
      {
        step: "01",
        title: "Listen & Understand",
        description:
          "We start by deeply understanding your work, your goals, and the people you serve.",
      },
      {
        step: "02",
        title: "Strategic Design",
        description:
          "Transform your message into an engaging digital experience that resonates with your audience.",
      },
      {
        step: "03",
        title: "Technical Excellence",
        description:
          "Build your site with clean, efficient code that ensures speed, security, and reliability.",
      },
    ] satisfies ProcessStep[];

  return (
    <Section class={cn("", local.class)} {...rest}>
      <SectionHeader>
        <SectionTitle>Our Process</SectionTitle>
        <SectionSubtitle>
          A streamlined approach to transforming your digital presence.
        </SectionSubtitle>
      </SectionHeader>
      <SectionContent class="grid gap-x-12 gap-y-8 md:grid-cols-3">
        <For each={steps()}>
          {(item) => (
            <div class="relative pl-16">
              <div class="absolute top-0 left-0 font-bold text-5xl text-accent/10">
                {item.step}
              </div>
              <h3 class="mb-4 font-semibold text-xl">{item.title}</h3>
              <p class="">{item.description}</p>
            </div>
          )}
        </For>
      </SectionContent>
    </Section>
  );
}

type Service = {
  icon: Component;
  title: string;
  description: string;
};

export const ServicesSection = (props: ComponentProps<"section">) => {
  const [local, rest] = splitProps(props, ["class", "children"]);

  const services = () =>
    [
      {
        icon: Rocket,
        title: "Purpose-Driven Development",
        description:
          "We understand that your website isn't just about looks—it's about advancing your mission.",
      },
      {
        icon: Code,
        title: "Professional Excellence",
        description:
          "Get a website that commands respect and builds trust with your audience from the first click.",
      },
      {
        icon: Users,
        title: "Simplified Process",
        description:
          "Focus on your important work while we handle the technical details with clear communication.",
      },
    ] satisfies Service[];

  return (
    <Section class={cn("py-24", local.class)} {...rest}>
      <SectionHeader class="mx-auto mb-16 max-w-3xl text-center">
        <SectionTitle class="text-secondary-foreground">
          Why Choose Jumpwind Studio?
        </SectionTitle>
        <SectionSubtitle class="font-medium text-lg text-secondary-foreground">
          We specialize in helping mission-driven organizations break free from
          technical barriers.
        </SectionSubtitle>
      </SectionHeader>
      <SectionContent class="grid gap-8 md:grid-cols-3">
        <For each={services()}>
          {(item) => (
            <Card class="group relative overflow-hidden">
              <CardContent class="p-8">
                <div class="absolute inset-0 transition-colors" />
                <item.icon class="mb-6 h-12 w-12" />
                <h3 class="mb-2 font-semibold text-xl">{item.title}</h3>
                <p class="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          )}
        </For>
      </SectionContent>
    </Section>
  );
};

export function TestimonialSection(props: ComponentProps<"section">) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <Section variant="secondary" class={cn("", local.class)} {...rest}>
      <SectionHeader class="max-w-4xl">
        <blockquote class="mb-8 font-medium text-3xl italic">
          "Your website transformed how people see our work. We've seen a
          dramatic increase in engagement and support since launching."
        </blockquote>
        <div class="flex items-center gap-4">
          <div class="h-12 w-12 rounded-full" />
          <div>
            <div class="font-semibold">Sarah Chen</div>
            <div class="text-foreground">Ocean Conservation Foundation</div>
          </div>
        </div>
      </SectionHeader>
    </Section>
  );
}

export function IdealClientSection(props: ComponentProps<"section">) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <section
      class={cn("bg-foreground py-24 text-background", local.class)}
      {...rest}
    >
      <div class="container mx-auto px-4">
        <div class="mx-auto mb-16 max-w-3xl text-center">
          <SectionTitle>Who We Serve</SectionTitle>
          <SectionSubtitle>
            We partner with organizations making a real difference in the world.
          </SectionSubtitle>
        </div>
        <SectionContent class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <For
            each={[
              "Nonprofit Organizations",
              "Social Enterprises",
              "Community Groups",
              "Individual Changemakers",
              "Mission-Driven Businesses",
            ]}
          >
            {(item) => (
              <div class="rounded-lg bg-card p-4 text-center font-medium text-card-foreground shadow-inner transition-colors hover:bg-accent hover:text-accent-foreground">
                {item}
              </div>
            )}
          </For>
        </SectionContent>
      </div>
    </section>
  );
}

export function ConsultSection(props: ComponentProps<"section">) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <Section class={cn("bg-background py-24", local.class)} {...rest}>
      <SectionHeader class="container mx-auto px-4 text-center">
        <h2 class="mb-4 font-bold text-3xl md:text-4xl">
          Ready to Amplify Your Impact?
        </h2>
        <p class="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Let's discuss how we can help your organization reach its full
          potential online.
        </p>
        <Button class="">Schedule a Free Consultation</Button>
      </SectionHeader>
    </Section>
  );
}
