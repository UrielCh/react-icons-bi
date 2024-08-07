import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cabinet icon from BoxIcons
 * @module
 */
export function BiCabinet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4zM5 4h14v7H5V4zm0 16v-7h14.001v7H5z"}},{tag:"path",attr:{d:"M14 7h-4V6H8v3h8V6h-2zm0 8v1h-4v-1H8v3h8v-3z"},child:[]}]})(props);
}
export default BiCabinet;
