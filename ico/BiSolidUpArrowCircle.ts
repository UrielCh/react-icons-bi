import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidUpArrowCircle icon from BoxIcons
 * @module
 */
export function BiSolidUpArrowCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-15 5 5h-4v5h-2v-5H7l5-5z"}}]})(props);
}
export default BiSolidUpArrowCircle;
