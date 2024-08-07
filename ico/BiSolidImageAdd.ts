import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidImageAdd icon from BoxIcons
 * @module
 */
export function BiSolidImageAdd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m9 13 3-4 3 4.5V12h4V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-4H5l3-4 1 2z"}},{tag:"path",attr:{d:"M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"},child:[]}]})(props);
}
export default BiSolidImageAdd;
