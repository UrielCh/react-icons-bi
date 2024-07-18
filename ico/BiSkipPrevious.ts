import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SkipPrevious from BoxIcons
 */
export function BiSkipPrevious(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m16 7-7 5 7 5zm-7 5V7H7v10h2z"}}]})(props);
}
export default BiSkipPrevious;
