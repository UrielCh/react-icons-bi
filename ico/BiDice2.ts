import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Dice2 icon from BoxIcons
 * @module
 */
export function BiDice2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"}},{tag:"circle",attr:{"cx":"9.5","cy":"12","r":"1.5"},child:[]},{tag:"circle",attr:{"cx":"14.5","cy":"12","r":"1.5"},child:[]}]})(props);
}
export default BiDice2;
