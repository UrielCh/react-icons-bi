import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidArrowFromTop icon from BoxIcons
 * @module
 */
export function BiSolidArrowFromTop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 4h12v2H6zm5 4v6H6l6 6 6-6h-5V8z"}}]})(props);
}
export default BiSolidArrowFromTop;
