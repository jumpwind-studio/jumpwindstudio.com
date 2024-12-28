import { getColors, useColors } from "@/lib/colors";
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
      class="group relative flex aspect-[3/1] w-full flex-1 flex-col gap-2 text-[--text] sm:aspect-[2/3] sm:h-auto sm:w-auto [&>svg]:absolute [&>svg]:top-4 [&>svg]:right-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:opacity-0 [&>svg]:transition-opacity"
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
      <div class="w-full flex-1 rounded-md bg-[--bg] md:rounded-lg" />
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

export default function ColorsPage() {
  const colors = () => getColors();

  // <Suspense>
  // <ColorFormatSelector
  // color={colorPalette.colors[0]}
  // class="ml-auto"
  // />
  // </Suspense>

  return (
    <main class="bg-background text-background">
      <div id="colors" class="grid scroll-mt-20 gap-8">
        <For each={colors()}>
          {(colorPalette) => (
            <div
              id={colorPalette.name}
              class="rounded-lg shadow-sm ring-1 ring-border"
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
