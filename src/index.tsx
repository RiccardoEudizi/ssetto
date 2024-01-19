import "./styles.css";

//@ts-ignore
import Dr from "corvu/drawer";
import {
  createEffect,
  JSXElement,
} from "solid-js";

type OverlayProps = { backgroundColor: string };
function Overlay() {
  const context = Dr.useContext();

  return (
    <Dr.Overlay
      class="overlay"
      style={{
        "background-color": `rgb(0 0 0 / ${0.5 * context?.openPercentage()})`,
      }}
    />
  );
}
type ContentProps = {
  children: JSXElement;
  hiddenFooter: boolean;
  class?: string;
};
function Content(props: ContentProps) {
  return (
    <Dr.Content class={"peer content " + props.class!}>
      {props.children}
    </Dr.Content>
  );
}


type RootProps = {
  children: JSXElement;
  scaleBackground: boolean;
  bgSelector: HTMLElement;
};
function Root(props: RootProps) {
  return (
    <Dr.Root breakPoints={[0.75]}>
      <HomeDrawer {...props}>{props.children}</HomeDrawer>
    </Dr.Root>
  );
}

function HomeDrawer(props: RootProps) {
  const context = Dr.useContext();
  const scaleValue = () => 1 - (context?.openPercentage() ?? 0) / 22;
  const borderRadiusValue = () => (context?.openPercentage() ?? 0) * 10;

  const translateYValue = () => context?.openPercentage() ?? 0;

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
      if (context?.openPercentage() > 0) {
        props.bgSelector.style.overflow = "hidden";
      } else {
        props.bgSelector.style.overflow = "auto";
      }
    }
  });

  return props.children;
}

export default {
  Root: Root,
  Trigger: Dr.Trigger,
  Label: Dr.Label,
  Title: Dr.Title,
  Overlay: Overlay,
  Content: Content,
  Description: Dr.Description,
  Portal: Dr.Portal,
};
