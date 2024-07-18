import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ReflectHorizontal icon from BoxIcons
 * @module
 */
export function BiReflectHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 21h12l-6-6-6 6zM18 3H6l6 6 6-6zM3 11h3v2H3zm5 0h3v2H8zm5 0h3v2h-3zm5 0h3v2h-3z"}}]})(props);
}
export default BiReflectHorizontal;
