import Drawer from "ssetto";

export default function Home() {
  
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <Drawer.Root   bgSelector={document.querySelector('#app') as HTMLElement}>
        <Drawer.Trigger  class="rounded-lg bg-stone-100 px-4 py-3 text-lg font-medium text-stone-600 transition-all duration-100 hover:bg-stone-200 active:translate-y-0.5">
          Open Drawer
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay  />
          <Drawer.Content class="max-h-[90vh] bg-stone-50 border-none" >
            <div class="h-1 w-10 self-center rounded-full bg-stone-300"  />
            <Drawer.Label class="mt-2 text-center text-xl font-bold">
              I'm a drawer!
            </Drawer.Label>
            <Drawer.Description  class="mt-1 text-center">
              Drag down to close me.
            </Drawer.Description>
            <p class="absolute inset-x-0 -bottom-5 z-10 text-center bg-inherit">
              🐸 You found froggy!
            </p>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </main>
  );
}
