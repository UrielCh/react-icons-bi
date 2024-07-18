import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowToBottom icon from BoxIcons
 * @module
 */
export function BiArrowToBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 18h12v2H6zm5-14v8.586L6.707 8.293 5.293 9.707 12 16.414l6.707-6.707-1.414-1.414L13 12.586V4z"}}]})(props);
}
export default BiArrowToBottom;
