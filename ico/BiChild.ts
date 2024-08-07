import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Child icon from BoxIcons
 * @module
 */
export function BiChild(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{"cx":"12","cy":"6","r":"2"}},{tag:"path",attr:{d:"M14 9h-4a1 1 0 0 0-.8.4l-3 4 1.6 1.2L9 13v7h2v-4h2v4h2v-7l1.2 1.6 1.6-1.2-3-4A1 1 0 0 0 14 9z"},child:[]}]})(props);
}
export default BiChild;
