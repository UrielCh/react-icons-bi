import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Area icon from BoxIcons
 * @module
 */
export function BiArea(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm16.002 14H5V5h14l.002 14z"}},{tag:"path",attr:{d:"M15 12h2V7h-5v2h3zm-3 3H9v-3H7v5h5z"},child:[]}]})(props);
}
export default BiArea;
