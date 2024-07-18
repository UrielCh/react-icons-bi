import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Italic icon from BoxIcons
 * @module
 */
export function BiItalic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 7V4H9v3h2.868L9.012 17H5v3h10v-3h-2.868l2.856-10z"}}]})(props);
}
export default BiItalic;
