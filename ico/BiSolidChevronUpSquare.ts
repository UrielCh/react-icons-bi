import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidChevronUpSquare icon from BoxIcons
 * @module
 */
export function BiSolidChevronUpSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm7-13.414 5.707 5.707-1.414 1.414L12 10.414l-4.293 4.293-1.414-1.414L12 7.586z"}}]})(props);
}
export default BiSolidChevronUpSquare;
