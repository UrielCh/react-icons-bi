import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * WindowOpen icon from BoxIcons
 * @module
 */
export function BiWindowOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h5v-2H4V7h16v12h-5v2h5c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"}},{tag:"path",attr:{d:"M13 21v-5h3l-4-5-4 5h3v5z"},child:[]}]})(props);
}
export default BiWindowOpen;
