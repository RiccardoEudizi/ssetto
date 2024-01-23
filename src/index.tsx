import "./styles.css";
import type Tr from "../node_modules/corvu/dist/Trigger-9BTijD2Z";
import Dr from "corvu/drawer";
import { createEffect, JSX, JSXElement, on } from "solid-js";

type BaseProps = {
  as?: string;
  class?: string;
  children: JSXElement;
  contextId?:string
};

function Overlay(props: Omit<BaseProps, "children">) {
  const context = Dr.useContext(props.contextId );

  return (
    <Dr.Overlay
      {...props}
      class="overlay"
      style={{
        "background-color": `rgb(0 0 0 / 1)`,
        opacity: `${0.5 * context?.openPercentage()}`,
      }}
    />
  );
}
type ContentWProps = {
  children: JSXElement;
  contextId?:string
  class?: string;
};
function Content(props: ContentWProps) {
  return (
    <Dr.Content {...props} contextId={props.contextId} class={"peer content " + props.class!}>
      {props.children}
    </Dr.Content>
  );
}

type RootWProps = {
  children: JSXElement;

  bgSelector: HTMLElement;
  snapPoints?: number[];
  defaultSnapPoint?: number;
  open?: boolean;
  side?: "top" | "bottom" | "right" | "left";
  contextId?: string;
  onOpenChange?: (open: boolean) => void;
};
function Root(props: RootWProps) {
  return (
    <Dr.Root
      contextId={props.contextId ?? undefined}
      side={props.side ?? "bottom"}
      open={props.open}
      onOpenChange={props.onOpenChange}
      breakPoints={[0.75]}
      snapPoints={props.snapPoints ?? [0, 1]}
      defaultSnapPoint={props.defaultSnapPoint ?? 1}
    >
      <HomeDrawer {...props}>{props.children}</HomeDrawer>
    </Dr.Root>
  );
}

function HomeDrawer(props: RootWProps) {
  const context = Dr.useContext(props.contextId );
  const scaleValue = () => 1 - (context?.openPercentage() ?? 0) / 22;
  const borderRadiusValue = () => (context?.openPercentage() ?? 0) * 14;

  const translateYValue = () => context?.openPercentage() ?? 0;

  createEffect(() => {
    props.bgSelector.dataset.drawerWrapper = "";
    props.bgSelector.dataset.drawerOpen = String(context?.openPercentage() > 0);
    props.bgSelector.dataset.drawerTransitioning = String(
      context?.isTransitioning()
    );

    props.bgSelector.style.setProperty("--scale-amount", `${scaleValue()}`);
    props.bgSelector.style.setProperty("--open-percentage", `${context?.openPercentage()}`);
    props.bgSelector.style.setProperty(
      "--radius-amount",
      `${borderRadiusValue()}px`
    );
    props.bgSelector.style.setProperty(
      "--translate-y-amount",
      `${translateYValue()}px`
    );
    if (context?.openPercentage() > 0) {
      props.bgSelector.style.overflow = "hidden";
    } else {
      props.bgSelector.style.overflow = "auto";
    }
  });

  return props.children;
}

export default {
  Root: Root,

  Trigger: Dr.Trigger as (props: BaseProps) => JSX.Element,
  Label: Dr.Label as (props: BaseProps) => JSX.Element,

  Overlay: Overlay,
  Content: Content,
  Description: Dr.Description as (props: BaseProps) => JSX.Element,
  Portal: Dr.Portal,
} as const;
