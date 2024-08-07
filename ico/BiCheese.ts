import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cheese icon from BoxIcons
 * @module
 */
export function BiCheese(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.16 2a1 1 0 0 0-.66.13l-12 7a.64.64 0 0 0-.13.1l-.1.08a1.17 1.17 0 0 0-.17.26.84.84 0 0 0-.1.43v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V10a8.08 8.08 0 0 0-6.84-8zm0 2.05A6.07 6.07 0 0 1 19.93 9H6.7zM20 19H4v-8h16z"}},{tag:"circle",attr:{"cx":"6.5","cy":"16.5","r":"1.5"},child:[]},{tag:"circle",attr:{"cx":"11.5","cy":"13.5","r":"1.5"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"16","r":"2"},child:[]}]})(props);
}
export default BiCheese;
