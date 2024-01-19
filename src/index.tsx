//@ts-ignore
import Dr from "corvu/drawer";
import {
  createEffect,
  createSignal,
  JSXElement,
  mergeProps,
  on,
  Show,
  type VoidComponent,
} from "solid-js";

const [drawerContext, setDrawerContext] = createSignal<any>();
type OverlayProps = { backgroundColor: string };
function Overlay(props: OverlayProps) {
  const context = Dr.useContext();

  return (
    <Dr.Overlay
      class="fixed inset-0 z-40 corvu-peer-transitioning:transition-colors corvu-peer-transitioning:duration-500 corvu-peer-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)]"
      style={{
        "background-color": `rgb(0 0 0 / ${0.5 * context?.openPercentage()})`,
      }}
    />
  );
}
type ContentProps = { children: JSXElement; hiddenFooter: boolean };
function Content(props: ContentProps) {
  return (
    <Dr.Content class="peer fixed inset-x-0 text-white bottom-0 z-50 flex h-full max-h-[400px] flex-col rounded-t-lg border-t-4 border-stone-400 bg-stone-950 pt-3 after:absolute after:inset-x-0 after:top-full after:h-[50%] after:bg-inherit corvu-transitioning:transition-transform corvu-transitioning:duration-500 corvu-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)] lg:select-none">
      {props.children}
      <Show when={props.hiddenFooter}>
        <p class="absolute inset-x-0 -bottom-5 z-10 text-center">
          🐸 You found froggy!
        </p>
      </Show>
    </Dr.Content>
  );
}
const DrawerExample = () => {
  const context = Dr.useContext();

  createEffect(
    on(
      () => context,
      (ctx) => {
        setDrawerContext(ctx);
      }
    )
  );

  return (
    <>
      <Dr.Trigger class="rounded-lg bg-stone-100 px-4 py-3 text-lg font-medium text-stone-600 transition-all duration-100 hover:bg-stone-200 active:translate-y-0.5">
        Open Drawer
      </Dr.Trigger>
      <Dr.Portal>
        <Dr.Overlay
          class="fixed inset-0 z-40 corvu-peer-transitioning:transition-colors corvu-peer-transitioning:duration-500 corvu-peer-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{
            "background-color": `rgb(0 0 0 / ${
              0.5 * context?.openPercentage()
            })`,
          }}
        />
        <Dr.Content class="peer fixed inset-x-0 text-white bottom-0 z-50 flex h-full max-h-[400px] flex-col rounded-t-lg border-t-4 border-stone-400 bg-stone-950 pt-3 after:absolute after:inset-x-0 after:top-full after:h-[50%] after:bg-inherit corvu-transitioning:transition-transform corvu-transitioning:duration-500 corvu-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)] lg:select-none">
          <div class="h-1 w-10 self-center rounded-full bg-stone-50" />
          <Dr.Label class="mt-2 text-center text-xl font-bold">
            I'm a drawer!
          </Dr.Label>
          <Dr.Description class="mt-1 text-center">
            Drag down to close me.
          </Dr.Description>
          <p class="absolute inset-x-0 -bottom-5 z-10 text-center">
            🐸 You found froggy!
          </p>
        </Dr.Content>
      </Dr.Portal>
    </>
  );
};

type RootProps = {
  children: JSXElement;
  scaleBackground: boolean;
  bgSelector: HTMLElement;
};
function Root(props: RootProps) {
  return (
    <Dr.Root breakPoints={[0.65]}>
      <HomeDrawer {...props}>{props.children}</HomeDrawer>
    </Dr.Root>
  );
}

function HomeDrawer(props: RootProps) {
  const context = Dr.useContext();
  const scaleValue = () => 1 - (context?.openPercentage() ?? 0) / 28;
  const borderRadiusValue = () => (context?.openPercentage() ?? 0) * 10;

  const translateYValue = () =>
    Math.max(0, (context?.openPercentage() ?? 0) * 14);

  createEffect(() => {
    if (props.scaleBackground) {
      props.bgSelector.dataset.drawerWrapper = "";
      props.bgSelector.dataset.drawerOpen = String(
        context?.openPercentage() > 0
      );
      props.bgSelector.dataset.drawerTransitioning = context?.isTransitioning();

      props.bgSelector.style.setProperty("--scale-amount", `${scaleValue()}`);
      props.bgSelector.style.setProperty(
        "--radius-amount",
        `${borderRadiusValue()}px`
      );
      props.bgSelector.style.setProperty(
        "--translate-y-amount",
        `${translateYValue()}px`
      );
    }
  });

  return (
    <>
      <main
        class="p-4 bg-white h-full min-h-full overflow-auto mx-auto "
        data-drawer-wrapper
        data-drawer-open={context?.openPercentage() > 0}
        data-drawer-transitioning={context?.isTransitioning()}
        style={{
          "--scale-amount": `${scaleValue()}`,
          "--radius-amount": `${borderRadiusValue()}px`,
          "--translate-y-amount": `${translateYValue()}px`,
        }}
      >
        {props.children}
      </main>
    </>
  );
}

export default {
  Root: Root,
  Trigger: Dr.Trigger,
  Label: Dr.Label,
  Title: Dr.Title,
  Overlay: Overlay,
  Content: Content,
  Portal: Dr.Portal,
};
