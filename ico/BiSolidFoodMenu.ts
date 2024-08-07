import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidFoodMenu icon from BoxIcons
 * @module
 */
export function BiSolidFoodMenu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 2h2v20H3zm16 0H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-1 10H9v-2h9v2zm0-4H9V6h9v2z"}}]})(props);
}
export default BiSolidFoodMenu;
