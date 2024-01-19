import "./styles.css";


import Dr, { OverlayProps } from "corvu/drawer";
import {
  createEffect,
  JSX,
  JSXElement,
} from "solid-js";


function Overlay(props:OverlayProps) {
  const context = Dr.useContext();

  return (
    <Dr.Overlay
    {...props}
      class="overlay"
      style={{
        "background-color": `rgb(0 0 0 / 1)`,
        "opacity":`${0.5 * context?.openPercentage()}`,
      }}
    />
  );
}
type ContentWProps = {
  children: JSXElement;
 
  class?: string;
} ;
function Content(props: ContentWProps ) {
  return (
    <Dr.Content {...props} class={"peer content " + props.class!}>
      {props.children}
    </Dr.Content>
  );
}


type RootWProps = {
  children: JSXElement;
 
  bgSelector: HTMLElement;
} ;
function Root(props: RootWProps ) {
  return (
    <Dr.Root {...props} breakPoints={[0.75]} >
      <HomeDrawer {...props}>{props.children}</HomeDrawer>
    </Dr.Root>
  );
}

function HomeDrawer(props: RootWProps) {
  const context = Dr.useContext();
  const scaleValue = () => 1 - (context?.openPercentage() ?? 0) / 22;
  const borderRadiusValue = () => (context?.openPercentage() ?? 0) * 14;

  const translateYValue = () => context?.openPercentage() ?? 0;

  createEffect(() => {
   
      props.bgSelector.dataset.drawerWrapper = "";
      props.bgSelector.dataset.drawerOpen = String(
        context?.openPercentage() > 0
      );
      props.bgSelector.dataset.drawerTransitioning =String( context?.isTransitioning());

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
    
  });

  return props.children;
}

export default {
  Root: Root,
  Trigger: Dr.Trigger ,
  Label: Dr.Label as (props:JSX.HTMLAttributes<"h2">) => JSX.Element,
  
  Overlay: Overlay,
  Content: Content ,
  Description: Dr.Description as (props:JSX.HTMLAttributes<"p">) => JSX.Element,
  Portal: Dr.Portal ,
};
