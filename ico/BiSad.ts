import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sad icon from BoxIcons
 * @module
 */
export function BiSad(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"}},{tag:"circle",attr:{"cx":"8.5","cy":"10.5","r":"1.5"},child:[]},{tag:"circle",attr:{"cx":"15.493","cy":"10.493","r":"1.493"},child:[]},{tag:"path",attr:{d:"M12 14c-3 0-4 3-4 3h8s-1-3-4-3z"},child:[]}]})(props);
}
export default BiSad;
