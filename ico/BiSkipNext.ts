import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SkipNext icon from BoxIcons
 * @module
 */
export function BiSkipNext(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7 7v10l7-5zm9 10V7h-2v10z"}}]})(props);
}
export default BiSkipNext;
