import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Restaurant icon from BoxIcons
 * @module
 */
export function BiRestaurant(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 10h-2V3H8v7H6V3H4v8c0 1.654 1.346 3 3 3h1v7h2v-7h1c1.654 0 3-1.346 3-3V3h-2v7zm7-7h-1c-1.159 0-2 1.262-2 3v8h2v7h2V4a1 1 0 0 0-1-1z"}}]})(props);
}
export default BiRestaurant;
