import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoveHorizontal icon from BoxIcons
 * @module
 */
export function BiMoveHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 11H7V7l-5 5 5 5v-4h10v4l5-5-5-5z"}}]})(props);
}
export default BiMoveHorizontal;
