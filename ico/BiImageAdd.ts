import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ImageAdd icon from BoxIcons
 * @module
 */
export function BiImageAdd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"}},{tag:"path",attr:{d:"m8 11-3 4h11l-4-6-3 4z"},child:[]},{tag:"path",attr:{d:"M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"},child:[]}]})(props);
}
export default BiImageAdd;
