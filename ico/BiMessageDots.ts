import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MessageDots icon from BoxIcons
 * @module
 */
export function BiMessageDots(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.766L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.234V16H4V4h16v12z"}},{tag:"circle",attr:{"cx":"15","cy":"10","r":"2"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"10","r":"2"},child:[]}]})(props);
}
export default BiMessageDots;
