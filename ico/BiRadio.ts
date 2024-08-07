import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Radio icon from BoxIcons
 * @module
 */
export function BiRadio(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m20.25 5.025-7.898-2.962-.703 1.873L14.484 5H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.018-.767-1.85-1.75-1.975zM4 19v-7h16v-2H4V7h16l.001 12H4z"}},{tag:"circle",attr:{"cx":"16.5","cy":"15.5","r":"2.5"},child:[]},{tag:"path",attr:{d:"M6 15h4.999v2H6z"},child:[]}]})(props);
}
export default BiRadio;
