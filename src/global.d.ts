  declare module 'corvu/drawer'{

import { Accessor, JSX, Component, ValidComponent, Setter } from 'solid-js';
 const DEFAULT_DISCLOSURE_CONTENT_ELEMENT = "div";
type DisclosureContentProps<T extends ValidComponent = typeof DEFAULT_DISCLOSURE_CONTENT_ELEMENT> = OverrideComponentProps<T, PolymorphicAttributes<T> & {
    /** Whether the disclosure content should be forced to render. Useful when using third-party animation libraries. */
    forceMount?: boolean;
    /** The `id` of the disclosure context to use. */
    contextId?: string;
    /** @hidden */
    ref?: (element: HTMLElement) => void;
    /** @hidden */
    style?: JSX.CSSProperties;
    /** @hidden */
    children?: JSX.Element;
    /** @hidden */
    'data-corvu-disclosure-content'?: string | undefined;
}>;
/** Content of a disclosure. Can be animated.
 *
 * @data `data-corvu-disclosure-content` - Present on every disclosure content element.
 * @data `data-expanded` - Present when the disclosure is expanded.
 * @data `data-collapsed` - Present when the disclosure is collapsed.
 * @css `--corvu-disclosure-content-width` - The width of the disclosure content. Useful if you want to animate its width.
 * @css `--corvu-disclosure-content-height` - The height of the disclosure content. Useful if you want to animate its height.
 */
 const DisclosureContent: <T extends ValidComponent = "div">(props: DisclosureContentProps<T>) => JSX.Element;

type DisclosureContextValue = {
    /** Whether the disclosure is expanded or not. */
    expanded: Accessor<boolean>;
    /** Callback fired when the expanded state changes. */
    setExpanded: Setter<boolean>;
    /** Whether the disclosure content should be removed or hidden when collapsed. */
    collapseBehavior: Accessor<'remove' | 'hide'>;
    /** The `id` attribute of the disclosure content element. */
    disclosureId: Accessor<string>;
    /** Whether the disclosure content is present. This differes from `expanded` as it tracks pending animations. */
    contentPresent: Accessor<boolean>;
    /** The disclosure content element. */
    contentRef: Accessor<HTMLElement | null>;
    /** The current size of the disclosure content. Useful if you want to animate width or height. `[width, height]` */
    contentSize: Accessor<[number, number] | null>;
};
/** Context which exposes various properties to interact with the disclosure. Optionally provide a contextId to access a keyed context. */
 const useDisclosureContext: (contextId?: string) => DisclosureContextValue;

type DisclosureRootProps = {
    /** Whether the disclosure is expanded or not. */
    expanded?: boolean;
    /** Callback fired when the expanded state changes. */
    onExpandedChange?: (expanded: boolean) => void;
    /** Whether the disclosure is expanded initially or not. *Default = `false`* */
    initialExpanded?: boolean;
    /** Whether the disclosure content should be removed or hidden when collapsed. Useful if you want to always render the content for SEO reasons. *Default = `remove`* */
    collapseBehavior?: 'remove' | 'hide';
    /** The `id` attribute of the disclosure content element. *Default = A unique id.* */
    disclosureId?: string;
    /** The `id` of the disclosure context. Useful if you have nested disclosures and want to create components that belong to a disclosure higher up in the tree. */
    contextId?: string;
    children: JSX.Element | ((props: DisclosureRootChildrenProps) => JSX.Element);
};
/** Props that are passed to the Root component children callback. */
type DisclosureRootChildrenProps = {
    /** Whether the disclosure is expanded or not. */
    expanded: boolean;
    /** Callback fired when the expanded state changes. */
    setExpanded: Setter<boolean>;
    /** Whether the disclosure content should be removed or hidden when collapsed. */
    collapseBehavior: 'remove' | 'hide';
    /** The `id` attribute of the disclosure content element. */
    disclosureId: string;
    /** Whether the disclosure content is present. This differes from `expanded` as it tracks pending animations. */
    contentPresent: boolean;
    /** The disclosure content element. */
    contentRef: HTMLElement | null;
    /** The current size of the disclosure content. Useful if you want to animate width or height. `[width, height]` */
    contentSize: [number, number] | null;
};
/** Context wrapper for the disclosure. Is required for every disclosure you create. */
 const DisclosureRoot: Component<DisclosureRootProps>;
 const DEFAULT_DIALOG_CLOSE_ELEMENT = "button";
type DialogCloseProps<T extends ValidComponent = typeof DEFAULT_DIALOG_CLOSE_ELEMENT> = OverrideComponentProps<T, PolymorphicAttributes<T> & {
    /** The `id` of the dialog context to use. */
    contextId?: string;
    /** @hidden */
    onClick?: JSX.EventHandlerUnion<HTMLElement, MouseEvent>;
}>;
/** Close button that changes the open state to false when clicked.
 *
 * @data `data-corvu-dialog-close` - Present on every dialog close element.
 */
 const DialogClose: <T extends ValidComponent = "button">(props: DialogCloseProps<T>) => JSX.Element;

 const DEFAULT_DIALOG_CONTENT_ELEMENT = "div";
type DialogContentProps<T extends ValidComponent = typeof DEFAULT_DIALOG_CONTENT_ELEMENT> = OverrideComponentProps<T, PolymorphicAttributes<T> & {
    /** Whether the dialog content should be forced to render. Useful when using third-party animation libraries. */
    forceMount?: boolean;
    /** The `id` of the dialog context to use. */
    contextId?: string;
    /** @hidden */
    ref?: (element: HTMLElement) => void;
    /** @hidden */
    style?: JSX.CSSProperties;
}>;
/** Content of the dialog. Can be animated.
 *
 * @data `data-corvu-dialog-content` - Present on every dialog content element.
 * @data `data-open` - Present when the dialog is open.
 * @data `data-closed` - Present when the dialog is closed.
 */
 const DialogContent: <T extends ValidComponent = "div">(props: DialogContentProps<T>) => JSX.Element;

 const DEFAULT_DIALOG_DESCRIPTION_ELEMENT = "p";
type DialogDescriptionProps<T extends ValidComponent = typeof DEFAULT_DIALOG_DESCRIPTION_ELEMENT> = OverrideComponentProps<T, PolymorphicAttributes<T> & {
    /** The `id` of the dialog context to use. */
    contextId?: string;
}>;
/** Description element to announce the dialog to accessibility tools.
 *
 * @data `data-corvu-dialog-description` - Present on every dialog description element.
 */
 const DialogDescription: <T extends ValidComponent = "p">(props: DialogDescriptionProps<T>) => JSX.Element;

type DialogContextValue = {
    /** The `role` attribute of the dialog element. */
    role: Accessor<'dialog' | 'alertdialog'>;
    /** Whether the dialog is open or not. */
    open: Accessor<boolean>;
    /** Change the open state of the dialog. */
    setOpen: Setter<boolean>;
    /** Whether the dialog should be rendered as a modal or not. */
    modal: Accessor<boolean>;
    /** Whether the dialog should close when the user presses the `Escape` key. */
    closeOnEscapeKeyDown: Accessor<boolean>;
    /** Whether the dialog should be closed if the user interacts outside the bounds of `<Dialog.Content />`. */
    closeOnOutsidePointerDown: Accessor<boolean>;
    /** Whether pointer events outside of `<Dialog.Content />` should be disabled. */
    noOutsidePointerEvents: Accessor<boolean>;
    /** Whether scroll outside of the dialog should be prevented. */
    preventScroll: Accessor<boolean>;
    /** Whether the scrollbar of the `<body>` element should be hidden. */
    hideScrollbar: Accessor<boolean>;
    /** Whether padding should be added to the `<body>` element to avoid layout shift. */
    preventScrollbarShift: Accessor<boolean>;
    /** Whether padding or margin should be used to avoid layout shift. */
    preventScrollbarShiftMode: Accessor<'padding' | 'margin'>;
    /** Whether the dialog should trap focus or not. */
    trapFocus: Accessor<boolean>;
    /** Whether the dialog should restore focus to the previous active element when it closes. */
    restoreFocus: Accessor<boolean>;
    /** The element to receive focus when the dialog opens. */
    initialFocusEl?: Accessor<HTMLElement | undefined>;
    /** The element to receive focus when the dialog closes. */
    finalFocusEl?: Accessor<HTMLElement | undefined>;
    /** Whether the dialog content is present. This differes from `open` as it tracks pending animations. */
    contentPresent: Accessor<boolean>;
    /** The ref of the dialog content. */
    contentRef: Accessor<HTMLElement | null>;
    /** Whether the dialog overlay is present. This differes from `open` as it tracks pending animations. */
    overlayPresent: Accessor<boolean>;
    /** The ref of the dialog overlay. */
    overlayRef: Accessor<HTMLElement | null>;
    /** The `id` attribute of the dialog element. */
    dialogId: Accessor<string>;
    /** The `id` attribute of the dialog label element. Is undefined if no `Dialog.Label` is present. */
    labelId: Accessor<string | undefined>;
    /** The `id` attribute of the dialog description element. Is undefined if no `Dialog.Description` is present. */
    descriptionId: Accessor<string | undefined>;
};
/** Context which exposes various properties to interact with the dialog. Optionally provide a contextId to access a keyed context. */
 const useDialogContext: (contextId?: string) => DialogContextValue;

 const DEFAULT_DIALOG_LABEL_ELEMENT = "h2";
type DialogLabelProps<T extends ValidComponent = typeof DEFAULT_DIALOG_LABEL_ELEMENT> = OverrideComponentProps<T, PolymorphicAttributes<T> & {
    /** The `id` of the dialog context to use. */
    contextId?: string;
}>;
/** Label element to announce the dialog to accessibility tools.
 *
 * @data `data-corvu-dialog-label` - Present on every dialog label element.
 */
 const DialogLabel: <T extends ValidComponent = "h2">(props: DialogLabelProps<T>) => JSX.Element;

 const DEFAULT_DIALOG_OVERLAY_ELEMENT = "div";
type DialogOverlayProps<T extends ValidComponent = typeof DEFAULT_DIALOG_OVERLAY_ELEMENT> = OverrideComponentProps<T, PolymorphicAttributes<T> & {
    /** Whether the dialog overlay should be forced to render. Useful when using third-party animation libraries. */
    forceMount?: boolean;
    /** The `id` of the dialog context to use. */
    contextId?: string;
    /** @hidden */
    ref?: (element: HTMLElement) => void;
    /** @hidden */
    style?: JSX.CSSProperties;
}>;
/** Component which can be used to create a faded background. Can be animated.
 *
 * @data `data-corvu-dialog-overlay` - Present on every dialog overlay element.
 * @data `data-open` - Present when the dialog is open.
 * @data `data-closed` - Present when the dialog is closed.
 */
 const DialogOverlay: <T extends ValidComponent = "div">(props: DialogOverlayProps<T>) => JSX.Element;

type DialogPortalProps = OverrideComponentProps<typeof Portal, {
    /** Whether the dialog portal should be forced to render. Useful when using third-party animation libraries. */
    forceMount?: boolean;
    /** The `id` of the dialog context to use. */
    contextId?: string;
}>;
/** Portals its children at the end of the body element to ensure that the dialog always rendered on top. */
 const DialogPortal: (props: DialogPortalProps) => JSX.Element;

type DialogRootProps = {
    /** The `role` attribute of the dialog element. *Default = `'dialog'`* */
    role?: 'dialog' | 'alertdialog';
    /** Whether the dialog is open or not. */
    open?: boolean;
    /** Callback fired when the open state changes. */
    onOpenChange?(open: boolean): void;
    /** Whether the dialog is open initially or not. *Default = `false`* */
    initialOpen?: boolean;
    /** Whether the dialog should be rendered as a modal or not. *Default = `true`* */
    modal?: boolean;
    /** Whether the dialog should close when the user presses the `Escape` key. *Default = `true`* */
    closeOnEscapeKeyDown?: boolean;
    /** Callback fired when the user presses the `Escape` key. Can be prevented by calling `event.preventDefault`. */
    onEscapeKeyDown?(event: KeyboardEvent): void;
    /** Whether the dialog should be closed if the user interacts outside the bounds of `<Dialog.Content />`. *Default = `true` if `modal` is `true`, `false` otherwise* */
    closeOnOutsidePointerDown?: boolean;
    /** Callback fired when the user interacts outside the bounds of `<Dialog.Content />`. Can be prevented by calling `event.preventDefault`. */
    onOutsidePointerDown?(event: MouseEvent): void;
    /** Whether pointer events outside of `<Dialog.Content />` should be disabled. *Default = `true` if `modal` is `true`, `false` otherwise* */
    noOutsidePointerEvents?: boolean;
    /** Whether scroll outside of the dialog should be prevented. *Default = `true` if `modal` is `true`, `false` otherwise* */
    preventScroll?: boolean;
    /** Whether the scrollbar of the `<body>` element should be hidden. *Default = `true` if `modal` is `true`, `false` otherwise* */
    hideScrollbar?: boolean;
    /** Whether padding should be added to the `<body>` element to avoid layout shift. *Default = `true`* */
    preventScrollbarShift?: boolean;
    /**  Whether padding or margin should be used to avoid layout shift. *Default = `'padding'`* */
    preventScrollbarShiftMode?: 'padding' | 'margin';
    /** Whether the dialog should trap focus or not. *Default = `true`* */
    trapFocus?: boolean;
    /** Whether the dialog should restore focus to the previous active element when it closes. *Default = `true`* */
    restoreFocus?: boolean;
    /** The element to receive focus when the dialog opens. */
    initialFocusEl?: HTMLElement;
    /** Callback fired when focus moves into the dialog. Can be prevented by calling `event.preventDefault`. */
    onInitialFocus?(event: Event): void;
    /** The element to receive focus when the dialog closes. */
    finalFocusEl?: HTMLElement;
    /** Callback fired when focus moves out of the dialog. Can be prevented by calling `event.preventDefault`. */
    onFinalFocus?(event: Event): void;
    /** The `id` attribute of the dialog element. *Default = A unique id.* */
    dialogId?: string;
    /** The `id` attribute of the dialog label element. *Default = A unique id.* */
    labelId?: string;
    /** The `id` attribute of the dialog description element. *Default = A unique id.* */
    descriptionId?: string;
    /** The `id` of the dialog context. Useful if you have nested dialogs and want to create components that belong to a dialog higher up in the tree. */
    contextId?: string;
    children: JSX.Element | ((props: DialogRootChildrenProps) => JSX.Element);
};
/** Props that are passed to the Root component children callback. */
type DialogRootChildrenProps = {
    /** The `role` attribute of the dialog element. */
    role: 'dialog' | 'alertdialog';
    /** Whether the dialog is open or not. */
    open: boolean;
    /** Change the open state of the dialog. */
    setOpen: Setter<boolean>;
    /** Whether the dialog should be rendered as a modal or not. */
    modal: boolean;
    /** Whether the dialog should close when the user presses the `Escape` key. */
    closeOnEscapeKeyDown: boolean;
    /** Whether the dialog should be closed if the user interacts outside the bounds of the dialog content. */
    closeOnOutsidePointerDown: boolean;
    /** Whether pointer events outside of `<Dialog.Content />` should be disabled. */
    noOutsidePointerEvents: boolean;
    /** Whether scroll outside of the dialog should be prevented. */
    preventScroll: boolean;
    /** Whether the scrollbar of the `<body>` element should be hidden. */
    hideScrollbar: boolean;
    /** Whether padding should be added to the `<body>` element to avoid layout shift. */
    preventScrollbarShift: boolean;
    /** Whether padding or margin should be used to avoid layout shift. */
    preventScrollbarShiftMode: 'padding' | 'margin';
    /** Whether the dialog should trap focus or not. */
    trapFocus: boolean;
    /** Whether the dialog should restore focus to the previous active element when it closes. */
    restoreFocus: boolean;
    /** The element to receive focus when the dialog opens. */
    initialFocusEl?: HTMLElement;
    /** The element to receive focus when the dialog closes. */
    finalFocusEl?: HTMLElement;
    /** Whether the dialog content is present. This differes from `open` as it tracks pending animations. */
    contentPresent: boolean;
    /** The ref of the dialog content. */
    contentRef: HTMLElement | null;
    /** Whether the dialog overlay is present. This differes from `open` as it tracks pending animations. */
    overlayPresent: boolean;
    /** The ref of the dialog overlay. */
    overlayRef: HTMLElement | null;
    /** The `id` attribute of the dialog description element. */
    dialogId: string;
    /** The `id` attribute of the dialog label element. Is undefined if no `Dialog.Label` is present. */
    labelId: string | undefined;
    /** The `id` attribute of the dialog description element. Is undefined if no `Dialog.Description` is present. */
    descriptionId: string | undefined;
};
/** Context wrapper for the dialog. Is required for every dialog you create. */
 const DialogRoot: Component<DialogRootProps>;

 const DEFAULT_DIALOG_TRIGGER_ELEMENT = "button";
type DialogTriggerProps<T extends ValidComponent = typeof DEFAULT_DIALOG_TRIGGER_ELEMENT> = OverrideComponentProps<T, PolymorphicAttributes<T> & {
    /** The `id` of the dialog context to use. */
    contextId?: string;
    /** @hidden */
    onClick?: JSX.EventHandlerUnion<HTMLElement, MouseEvent>;
}>;
/** Button that changes the open state of the dialog when clicked.
 *
 * @data `data-corvu-dialog-trigger` - Present on every dialog trigger element.
 * @data `data-open` - Present when the dialog is open.
 * @data `data-closed` - Present when the dialog is closed.
 */
 const DialogTrigger: <T extends ValidComponent = "button">(props: DialogTriggerProps<T>) => JSX.Element;
import {  ComponentProps } from 'solid-js';
import { DynamicProps, Portal } from 'solid-js/web';

 const DEFAULT_POLYMORPHIC_ELEMENT = "div";
type PolymorphicAttributes<T extends ValidComponent> = {
    /** Component to render the polymorphic component as. *Default = `div`* */
    as?: T;
    /** Whether to render the polymorphic component as the first `<As />` component found in its children. *Default = `false`* */
    asChild?: boolean;
    /** @hidden */
    children?: JSX.Element;
};
type PolymorphicProps<T extends ValidComponent = typeof DEFAULT_POLYMORPHIC_ELEMENT> = OverrideComponentProps<T, PolymorphicAttributes<T>>;
/** Component, which either renders as the component provided in the `as` prop or, if `asChild` is set to `true`, as the first `<As />` component found in its children. */
 const Polymorphic: <T extends ValidComponent = "div">(props: PolymorphicProps<T>) => JSX.Element;
/** Dynamic component which the parent <Polymorphic> component should render as. */
 const As: <T extends ValidComponent>(props: DynamicProps<T>) => JSX.Element;

type OverrideComponentProps<T extends ValidComponent, Props> = OverrideProps<ComponentProps<T>, Props>;
type OverrideProps<T, P> = Omit<T, keyof P> & P;
type MaybeAccessor<T> = T | (() => T);
type Side = 'top' | 'right' | 'bottom' | 'left';
import 'solid-js/web';

type DrawerContextValue = {
    /** An array of points to snap to. Can be either percentages of the total drawer height or CSS pixel values. */
    snapPoints: Accessor<(string | number)[]>;
    /** Breakpoints between snap points. */
    breakPoints: Accessor<(string | number | typeof DefaultBreakpoint)[]>;
    /** The point to snap to when the drawer opens. */
    defaultSnapPoint: Accessor<string | number>;
    /** The active snap point. */
    activeSnapPoint: Accessor<string | number>;
    /** Change the active snap point. */
    setActiveSnapPoint(snapPoint: string | number): void;
    /** The side of the viewport the drawer appears. Is used to properly calculate dragging. */
    side: Accessor<Side>;
    /** Whether the drawer is currently being dragged by the user. */
    isDragging: Accessor<boolean>;
    /** Whether the drawer is currently transitioning to a snap point after the user stopped dragging or the drawer opens/closes. */
    isTransitioning: Accessor<boolean>;
    /** The transition state that the drawer is currently in. */
    transitionState: Accessor<'opening' | 'closing' | 'snapping' | 'resizing' | null>;
    /** How much the drawer is currently open. Can be > 1 depending on your `dampFunction`. */
    openPercentage: Accessor<number>;
    /** The current translate value applied to the drawer. Is the same for every side. */
    translate: Accessor<number>;
    /** After how many milliseconds the cached distance used for the velocity function should reset. */
    velocityCacheReset: Accessor<number>;
    /** Whether the user can skip snap points if the velocity is high enough. */
    allowSkippingSnapPoints: Accessor<boolean>;
    /** Whether the logic to handle dragging on scrollable elements is enabled. */
    handleScrollableElements: Accessor<boolean>;
    /** Whether the drawer watches for size changes and applies a fixed width/height for transitions. */
    transitionResize: Accessor<boolean>;
};
/** Context which exposes various properties to interact with the drawer. Optionally provide a contextId to access a keyed context. */
 const useDrawerContext: (contextId?: string) => DrawerContextValue;

/** Alternative placeholder to not override a certain breakpoint. */
 const DefaultBreakpoint: undefined;
type DrawerRootProps = {
    /** An array of points to snap to. Can be either percentages of the total drawer height or CSS pixel values. *Default = `[0, 1]`* */
    snapPoints?: (string | number)[];
    /** Optionally override the default breakpoints between snap points. This list has to be the length of `snapPoints.length - 1`. Use `Drawer.DefaultBreakpoint` or `undefined` for breakpoints you don't want to override. *Default = `[Drawer.DefaultBreakpoint]`* */
    breakPoints?: (string | number | typeof DefaultBreakpoint)[];
    /** The point to snap to when the drawer opens. *Default = `1`* */
    defaultSnapPoint?: string | number;
    /** The active snap point. */
    activeSnapPoint?: string | number;
    /** Callback fired when the active snap point changes. */
    onActiveSnapPointChange?(activeSnapPoint: string | number): void;
    /** The side of the viewport the drawer appears. Is used to properly calculate dragging. *Default = `'bottom'`* */
    side?: Side;
    /** Function to create a dampened distance if the user tries to drag the drawer away from the last snap point. */
    dampFunction?(distance: number): number;
    /** Function to calculate the velocity when the user stop dragging. This velocity modifier is used to calculate the point the drawer will snap to after release. You can disable velocity by always returning 1. */
    velocityFunction?(distance: number, time: number): number;
    /** After how many milliseconds the cached distance used for the velocity function should reset. *Default = `200`* */
    velocityCacheReset?: number;
    /** Whether the user can skip snap points if the velocity is high enough. *Default = `true`* */
    allowSkippingSnapPoints?: boolean;
    /** Corvu drawers have logic to make dragging and scrolling work together. If you don't want this behavior or if you want to implement something yourself, you can disable it with this property. *Default = `true`* */
    handleScrollableElements?: boolean;
    /** Whether the drawer should watch for size changes and apply a fixed width/height for transitions. *Default = `false`* */
    transitionResize?: boolean;
    children: JSX.Element | ((props: DrawerRootChildrenProps & DialogRootChildrenProps) => JSX.Element);
} & Omit<DialogRootProps, 'children'>;
/** Props that are passed to the Root component children callback. */
type DrawerRootChildrenProps = {
    /** An array of points to snap to. Can be either percentages of the total drawer height or CSS pixel values. */
    snapPoints: (string | number)[];
    /** Breakpoints between snap points. */
    breakPoints: (string | number | typeof DefaultBreakpoint)[];
    /** The point to snap to when the drawer opens. */
    defaultSnapPoint: string | number;
    /** The active snap point. */
    activeSnapPoint: string | number;
    /** Set the current active snap point. */
    setActiveSnapPoint(snapPoint: string | number): void;
    /** The side of the viewport the drawer appears. Is used to properly calculate dragging. */
    side: Side;
    /** Whether the drawer is currently being dragged by the user. */
    isDragging: boolean;
    /** Whether the drawer is currently transitioning to a snap point after the user stopped dragging or the drawer opens/closes. */
    isTransitioning: boolean;
    /** The transition state that the drawer is currently in. */
    transitionState: 'opening' | 'closing' | 'snapping' | 'resizing' | null;
    /** How much the drawer is currently open. Can be > 1 depending on your `dampFunction`. */
    openPercentage: number;
    /** The current translate value applied to the drawer. Is the same for every side. */
    translate: number;
    /** After how many milliseconds the cached distance used for the velocity function should reset. */
    velocityCacheReset: number;
    /** Whether the user can skip snap points if the velocity is high enough. */
    allowSkippingSnapPoints: boolean;
    /** Whether the logic to handle dragging on scrollable elements is enabled. */
    handleScrollableElements: boolean;
    /** Whether the drawer watches for size changes and applies a fixed width/height for transitions. */
    transitionResize: boolean;
};
/** Context wrapper for the drawer. Is required for every drawer you create. */
 const DrawerRoot: Component<DrawerRootProps>;

/** Content of the drawer. Can be animated.
 *
 * @data `data-corvu-dialog-content` - Present on every drawer/dialog content element.
 * @data `data-open` - Present when the drawer is open.
 * @data `data-closed` - Present when the drawer is closed.
 * @data `data-transitioning` - Present when the drawer is transitioning (opening, closing or snapping).
 * @data `data-opening` - Present when the drawer is in the open transition.
 * @data `data-closing` - Present when the drawer is in the close transition.
 * @data `data-snapping` - Present when the drawer is transitioning after the user stops dragging.
 * @data `data-resizing` - Present when the drawer is transitioning after the size (width/height) changes. Only present if `transitionResize` is set to `true`.
 */
 const DrawerContent: <T extends ValidComponent = "div">(props: DialogContentProps<T>) => JSX.Element;

 const _default: {
    DefaultBreakpoint: undefined;
    useContext: (contextId?: string | undefined) => DrawerContextValue;
    useDialogContext: (contextId?: string | undefined) => DialogContextValue;
    Root: Component<DrawerRootProps>;
    Trigger: <T extends ValidComponent = "button">(props: DialogTriggerProps<T>) => JSX.Element;
    Portal: (props: DialogPortalProps) => JSX.Element;
    Overlay: <T_1 extends ValidComponent = "div">(props: DialogOverlayProps<T_1>) => JSX.Element;
    Content: <T_2 extends ValidComponent = "div">(props: DialogContentProps<T_2>) => JSX.Element;
    Label: <T_3 extends ValidComponent = "h2">(props: DialogLabelProps<T_3>) => JSX.Element;
    Description: <T_4 extends ValidComponent = "p">(props: DialogDescriptionProps<T_4>) => JSX.Element;
    Close: <T_5 extends ValidComponent = "button">(props: DialogCloseProps<T_5>) => JSX.Element;
};

export { DialogCloseProps as CloseProps, DrawerContent as Content, DialogContentProps as ContentProps, type DrawerContextValue as ContextValue, DefaultBreakpoint, DialogDescriptionProps as DescriptionProps, DialogContextValue, DialogLabelProps as LabelProps, DialogOverlayProps as OverlayProps, DialogPortalProps as PortalProps, DrawerRoot as Root, type DrawerRootChildrenProps as RootChildrenProps, type DrawerRootProps as RootProps, DialogTriggerProps as TriggerProps, _default as default, useDrawerContext as useContext };


}