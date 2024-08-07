import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Images icon from BoxIcons
 * @module
 */
export function BiImages(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"}},{tag:"path",attr:{d:"M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"},child:[]},{tag:"path",attr:{d:"m12 12-1-1-2 3h10l-4-6z"},child:[]}]})(props);
}
export default BiImages;
