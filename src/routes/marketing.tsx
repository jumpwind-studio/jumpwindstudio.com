import MirrorsEdgeLogo from "@/assets/mirrorsedge-logo";

export default function Home() {
  return (
    <main class="relative mx-auto flex w-full max-w-[64rem] grow flex-col gap-8 px-6 py-8 md:gap-10 md:py-10 lg:gap-12 lg:px-8 lg:py-12">
      <div class="flex h-full flex-col items-center justify-center">
        <div class="flex max-h-40 items-center gap-4 divide-x-4 divide-amber-500/80 bg-amber-600 px-4 text-left">
          <MirrorsEdgeLogo class="-scale-100 size-full " />
          <div class="flex h-full flex-col px-4 tracking-tight">
            <h1 class="font-bold text-8xl text-seafoam-300">JUMPWIND</h1>
            <h2 class="font-bold font-mono text-5xl text-seafoam-300">
              studio
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}

// <span>역풍</span>

/* <span class="">JUMP</span> */
/* <span class="">WIND</span> */
