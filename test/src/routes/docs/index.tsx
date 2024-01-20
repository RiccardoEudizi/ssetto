export default function Docs() {
  return (
    <main class=" mx-auto flex flex-col min-h-screen   h-full  text-black p-4 max-w-4xl antialiased ">
      <h1 class="font-semibold text-7xl leading-relaxed text-center  ">
        Documentation
      </h1>

      <p class="font-normal text-xl leading-relaxed mt-4 text-center ">
        Ssetto is an unstyled drawer with a sheet animation on top of it.
      </p>
      <p class="font-normal text-xl text-center ">
        The drawer component is provided by{" "}
        <a
          class="font-semibold text-violet-700 leading-relaxed"
          href="https://corvu.dev/docs/primitives/drawer"
        >
          Corvu
        </a>
        , an unstyled component library
      </p>

      <ol class="mt-8 gap-y-10 flex flex-col">
        <li>
          <h2 class="font-semibold text-2xl leading-relaxed  ">Install</h2>

          <div class="font-mono font-medium text-black rounded-lg p-4 px-6 mt-4  bg-zinc-50 drop-shadow-sm border border-stone-400 border-opacity-60">
            <pre>npm install ssetto</pre>
          </div>
        </li>
        <li>
          <h2 class="font-semibold text-2xl leading-relaxed  ">Usage</h2>

          <div class="font-mono font-medium text-black rounded-lg p-4 px-6 mt-4  bg-zinc-50 drop-shadow-sm border border-stone-400 border-opacity-60">
            <pre class=" text-pretty">{`import { Drawer } from 'ssetto';

function MyComponent() {
  return (
    <Drawer.Root  bgSelector={document.querySelector('#app') as HTMLElement}>
        <Drawer.Trigger class="rounded-lg bg-stone-100 px-4 py-3 text-lg font-medium text-stone-600 transition-all duration-100 hover:bg-stone-200 active:translate-y-0.5">
          Open Drawer
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay  />
          <Drawer.Content class="max-h-[90vh] bg-stone-50 border-none" >
            <div class="h-1 w-10 self-center rounded-full bg-stone-300" />
            <Drawer.Label class="mt-2 text-center text-xl font-bold">
              I'm a drawer!
            </Drawer.Label>
            <Drawer.Description class="mt-1 text-center">
              Drag down to close me.
            </Drawer.Description>
            <p class="absolute inset-x-0 -bottom-5 z-10 text-center bg-inherit">
              🐸 You found froggy!
            </p>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
  );
}`}</pre>
          </div>
        </li>

        <li>
          <h2 class="font-semibold text-2xl leading-relaxed  ">
            API Reference
          </h2>
          <p>
            The Root, Overlay and the Content components are wrappers around
            Corvu's ones. The rest of components are exported from Corvu's ones
            <a
              href="https://corvu.dev/docs/primitives/drawer"
              class="font-semibold text-violet-700 leading-relaxed"
            >
              {" "}
              Corvu Docs
            </a>
          </p>

          <p class="py-3">
            <strong class="font-mono ">bgSelector: HTMLElement</strong> = the
            background element to apply the animation.
          </p>
          <p class="py-3">
            <strong class="font-mono ">snapPoints: number[]</strong> = array of
            points to where the drawer snaps
          </p>
          <p class="py-3">
            <strong class="font-mono ">defaultSnapPoint: number[]</strong> =
            snap point where the drawer snaps when opened
          </p>
          <p class="py-3">
            <strong class="font-mono ">class: string</strong> = class to style
            the element.
          </p>
        </li>
      </ol>
    </main>
  );
}
