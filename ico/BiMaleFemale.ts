import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MaleFemale icon from BoxIcons
 * @module
 */
export function BiMaleFemale(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{"cx":"6","cy":"4","r":"2"}},{tag:"path",attr:{d:"M9 7H3a1 1 0 0 0-1 1v7h2v7h4v-7h2V8a1 1 0 0 0-1-1z"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"4","r":"2"},child:[]},{tag:"path",attr:{d:"M20.21 7.73a1 1 0 0 0-1-.73h-4.5a1 1 0 0 0-1 .73L12 14h2l-1 4h2v4h4v-4h2l-1-4h2z"},child:[]}]})(props);
}
export default BiMaleFemale;
