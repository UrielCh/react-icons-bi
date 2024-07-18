import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FoodMenu from BoxIcons
 */
export function BiFoodMenu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z"}},{tag:"path",attr:{d:"M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z"},child:[]}]})(props);
}
export default BiFoodMenu;
