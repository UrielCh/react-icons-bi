import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Image icon from BoxIcons
 * @module
 */
export function BiImage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{"cx":"7.499","cy":"9.5","r":"1.5"}},{tag:"path",attr:{d:"m10.499 14-1.5-2-3 4h12l-4.5-6z"},child:[]},{tag:"path",attr:{d:"M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"},child:[]}]})(props);
}
export default BiImage;
