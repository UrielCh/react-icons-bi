import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidArrowToBottom icon from BoxIcons
 * @module
 */
export function BiSolidArrowToBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 18h12v2H6zm5-14v6H6l6 6 6-6h-5V4z"}}]})(props);
}
export default BiSolidArrowToBottom;
