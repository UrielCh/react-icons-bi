import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidDownArrowSquare icon from BoxIcons
 * @module
 */
export function BiSolidDownArrowSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 21a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14zm-8-9V7h2v5h4l-5 5-5-5h4z"}}]})(props);
}
export default BiSolidDownArrowSquare;
