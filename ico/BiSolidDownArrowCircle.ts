import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidDownArrowCircle icon from BoxIcons
 * @module
 */
export function BiSolidDownArrowCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15-5-5h4V7h2v5h4l-5 5z"}}]})(props);
}
export default BiSolidDownArrowCircle;
