import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidLandscape from BoxIcons
 */
export function BiSolidLandscape(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{"cx":"6.5","cy":"6.5","r":"2.5"}},{tag:"path",attr:{d:"m14 7-5.223 8.487L7 13l-5 7h20z"},child:[]}]})(props);
}
export default BiSolidLandscape;
