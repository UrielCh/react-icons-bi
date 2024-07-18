import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Dish icon from BoxIcons
 * @module
 */
export function BiDish(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 15c0-4.625-3.507-8.441-8-8.941V4h-2v2.059c-4.493.5-8 4.316-8 8.941v2h18v-2zM5 15c0-3.859 3.141-7 7-7s7 3.141 7 7H5zm-3 3h20v2H2z"}}]})(props);
}
export default BiDish;
