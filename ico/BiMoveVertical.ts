import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoveVertical from BoxIcons
 */
export function BiMoveVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m7 17 5 5 5-5h-4V7h4l-5-5-5 5h4v10z"}}]})(props);
}
export default BiMoveVertical;
