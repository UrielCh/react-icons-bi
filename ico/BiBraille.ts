import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Braille icon from BoxIcons
 * @module
 */
export function BiBraille(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{"cx":"4","cy":"7","r":"2"}},{tag:"circle",attr:{"cx":"9","cy":"12","r":"2"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"7","r":"2"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"12","r":"2"},child:[]},{tag:"circle",attr:{"cx":"15","cy":"17","r":"2"},child:[]},{tag:"circle",attr:{"cx":"20","cy":"7","r":"2"},child:[]},{tag:"circle",attr:{"cx":"4","cy":"17","r":"2"},child:[]}]})(props);
}
export default BiBraille;
