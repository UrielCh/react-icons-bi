import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DotsHorizontal icon from BoxIcons
 * @module
 */
export function BiDotsHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 10h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4z"}}]})(props);
}
export default BiDotsHorizontal;
