import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronsLeft icon from BoxIcons
 * @module
 */
export function BiChevronsLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m12.707 7.707-1.414-1.414L5.586 12l5.707 5.707 1.414-1.414L8.414 12z"}},{tag:"path",attr:{d:"M16.293 6.293 10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z"},child:[]}]})(props);
}
export default BiChevronsLeft;
