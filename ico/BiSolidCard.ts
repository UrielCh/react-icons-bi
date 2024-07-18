import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidCard icon from BoxIcons
 * @module
 */
export function BiSolidCard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 17c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H6c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12zM4 19h16v2H4z"}}]})(props);
}
export default BiSolidCard;
