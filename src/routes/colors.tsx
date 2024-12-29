import { getColors, useColors } from "@/lib/colors";
import { cn } from "@/lib/utils";
import { writeClipboard } from "@solid-primitives/clipboard";
import { CheckIcon, ClipboardIcon } from "lucide-solid";
import { For, type JSX, Show, Suspense, createSignal } from "solid-js";

export type Color = ReturnType<typeof getColors>[number]["colors"][number];

function Color(props: { color: Color }) {
  const colorsConfig = useColors();
  const format = () => colorsConfig.format;
  const [isCopied, setIsCopied] = createSignal(false);

  return (
    <button
      type="button"
      class="group relative flex aspect-3/1 w-full flex-1 flex-col gap-2 text-(--text) sm:aspect-2/3 sm:h-auto sm:w-auto [&>svg]:absolute [&>svg]:top-4 [&>svg]:right-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:opacity-0 [&>svg]:transition-opacity"
      style={
        {
          "--bg": `hsl(${props.color.hsl})`,
          "--text": props.color.foreground,
        } satisfies JSX.CSSProperties
      }
      onClick={() => {
        writeClipboard(props.color[format()]);
        console.log(`Copied ${props.color[format()]} to clipboard.`);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      }}
    >
      <Show
        when={isCopied()}
        fallback={<ClipboardIcon class="group-hover:opacity-100" />}
      >
        <CheckIcon class="group-hover:opacity-100" />
      </Show>
      <div class="w-full flex-1 rounded-md bg-(--bg) md:rounded-lg" />
      <div class="flex w-full flex-col items-center justify-center gap-1">
        <span class="hidden font-mono text-muted-foreground text-xs tabular-nums transition-colors group-hover:text-foreground lg:flex">
          {props.color.class}
        </span>
        <span class="font-mono text-muted-foreground text-xs tabular-nums transition-colors group-hover:text-foreground lg:hidden">
          {props.color.scale}
        </span>
      </div>
    </button>
  );
}

export const ColorSection = () => {
  const tw = () => [
    { bg: "bg-background", fg: "text-foreground" },
    { bg: "bg-muted", fg: "text-muted-foreground" },
    { bg: "bg-popover", fg: "text-popover-foreground" },
    { bg: "bg-card", fg: "text-card-foreground" },
    { bg: "bg-primary", fg: "text-primary-foreground" },
    { bg: "bg-secondary", fg: "text-secondary-foreground" },
    { bg: "bg-accent", fg: "text-accent-foreground" },
    { bg: "bg-destructive", fg: "text-destructive-foreground" },
  ];

  return (
    <>
      <div class="flex flex-col gap-1 bg-white p-2 sm:flex-row sm:gap-2">
        <Suspense>
          <For each={tw()}>
            {(color) => (
              <div
                class={cn(
                  "dark",
                  `${color.bg}`,
                  `${color.fg}`,
                  "size-40 rounded-md",
                  "flex items-center justify-center text-lg",
                )}
              >
                {color.bg}
              </div>
            )}
          </For>
        </Suspense>
      </div>
      <div class="flex flex-col gap-1 bg-white p-2 sm:flex-row sm:gap-2">
        <Suspense>
          <For each={tw()}>
            {(color) => (
              <div
                class={cn(
                  `${color.bg}`,
                  `${color.fg}`,
                  "size-40 rounded-md",
                  "flex items-center justify-center text-lg",
                )}
              >
                {color.bg}
              </div>
            )}
          </For>
        </Suspense>
      </div>
    </>
  );
};

export default function ColorsPage() {
  const colors = () => getColors();

  return (
    <main class="bg-background text-background">
      <div id="colors" class="grid scroll-mt-20 gap-8">
        <For each={colors()}>
          {(colorPalette) => (
            <div
              id={colorPalette.name}
              class="rounded-lg shadow-xs ring-1 ring-border"
            >
              <div class="flex items-center p-2 pb-0">
                <div class="flex-1 pl-1 font-medium text-sm">
                  <h2 class="capitalize">{colorPalette.name}</h2>
                </div>
              </div>
              <div class="flex flex-col gap-1 p-2 sm:flex-row sm:gap-2">
                <For each={colorPalette.colors}>
                  {(color) => <Color color={color} />}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </main>
  );
}
