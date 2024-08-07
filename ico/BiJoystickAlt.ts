import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * JoystickAlt icon from BoxIcons
 * @module
 */
export function BiJoystickAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{"cx":"15","cy":"13","r":"1"}},{tag:"circle",attr:{"cx":"17","cy":"11","r":"1"},child:[]},{tag:"path",attr:{d:"M10 9H8v2H6v2h2v2h2v-2h2v-2h-2z"},child:[]},{tag:"path",attr:{d:"M15 5H9a7 7 0 0 0-7 7 7 7 0 0 0 7 7h6a7 7 0 0 0 7-7 7 7 0 0 0-7-7zm0 12H9A5 5 0 1 1 9 7h6a5 5 0 1 1 0 10z"},child:[]}]})(props);
}
export default BiJoystickAlt;
