import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidUpArrowSquare icon from BoxIcons
 * @module
 */
export function BiSolidUpArrowSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm7-14 5 5h-4v5h-2v-5H7l5-5z"}}]})(props);
}
export default BiSolidUpArrowSquare;
