import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidCabinet icon from BoxIcons
 * @module
 */
export function BiSolidCabinet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v7h18V4zm-5 4H8V5h2v1h4V5h2v3zM5 22h14c1.103 0 2-.897 2-2v-7H3v7c0 1.103.897 2 2 2zm3-6h2v1h4v-1h2v3H8v-3z"}}]})(props);
}
export default BiSolidCabinet;
