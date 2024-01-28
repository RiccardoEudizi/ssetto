import { A } from "@solidjs/router";
import { createSignal, onMount } from "solid-js";
import Drawer from "ssetto";

export default function Home() {
  const [open,setOpen] = createSignal(false);

  onMount(() => {

    setTimeout(() => {
      setOpen(true)
    }, 2000);
  })
  
  return (
    <main class="text-center  flex flex-col justify-center items-center  h-screen  text-black p-4 antialiased">
      <svg class="absolute pointer-events-none inset-0 h-full w-full stroke-gray-200 opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" aria-hidden="true"><defs><pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M100 200V.5M.5 .5H200" fill="none"></path></pattern></defs><svg x="50%" y="-1" class="overflow-visible fill-gray-50"><path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0"></path></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect></svg>
      
      <div class="max-w-5xl">
      <Drawer.Root side="bottom" contextId="xxx" open={open()} onOpenChange={setOpen}  bgSelector={document.querySelector("#app") as HTMLElement}>
      <div class="p-4 ">
        <h1 class="font-semibold text-7xl leading-relaxed  ">Ssetto</h1>
        <div class="flex gap-x-12 mt-8">
        <Drawer.Trigger contextId="xxx"  class="rounded-xl bg-stone-50 border border-stone-300 shadow-sm border-opacity-75  px-4 w-fit self-center py-3 text-lg font-medium text-stone-600 transition-all duration-100 hover:bg-stone-200 active:translate-y-0.5">
          Open Drawer
        </Drawer.Trigger>
        <A href="/docs" class="py-3 w-fit px-4 font-medium text-lg text-stone-600">Docs  {"   ->"}</A>
        </div>
      </div>
        <Drawer.Portal contextId="xxx">
          <Drawer.Overlay contextId="xxx"/>
          <Drawer.Content contextId="xxx" class="max-h-[90vh]  -bottom-5 w-full  rounded-b-lg bg-stone-50 ">
            <div class="h-1 w-10 self-center rounded-full bg-stone-300" />
            <Drawer.Label contextId="xxx" class="mt-2 text-center text-xl font-bold">
              I'm a drawer!
            </Drawer.Label>
            <Drawer.Description contextId="xxx" class="mt-1 text-center">
              Drag down to close me.
            </Drawer.Description>
            <p class="absolute inset-x-0 -bottom-5 z-10 text-center bg-inherit">
              🐸 You found froggy!
            </p>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root side="left"  bgSelector={document.querySelector("#app") as HTMLElement}>
      <div class="p-4 ">
       
        <div class="flex  gap-x-12 mt-8">
        <Drawer.Trigger  class="rounded-xl bg-stone-50 border border-stone-300 shadow-sm border-opacity-75  px-4 w-fit self-start py-3 text-lg font-medium text-stone-600 transition-all duration-100 hover:bg-stone-200 active:translate-y-0.5">
          Open Left Drawer
        </Drawer.Trigger>
        </div>
      </div>
        <Drawer.Portal>
          <Drawer.Overlay />
          <Drawer.Content class="max-h-[100vh] w-[20vw] -bottom-0   rounded-b-lg bg-stone-50 ">
            <Drawer.Label class="mt-2 text-center text-xl font-bold">
              I'm a Left drawer!
            </Drawer.Label>
            <Drawer.Description class="mt-1 text-center">
              Drag left to close me.
            </Drawer.Description>
            <p class="absolute inset-x-0 -bottom-5 z-10 text-center bg-inherit">
              🐸 You found froggy!
            </p>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      </div>
    </main>
  );
}
