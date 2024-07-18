import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FastForward icon from BoxIcons
 * @module
 */
export function BiFastForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m19 12-7-5v10zM5 7v10l7-5z"}}]})(props);
}
export default BiFastForward;
