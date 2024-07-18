import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DotsVertical from BoxIcons
 */
export function BiDotsVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 10h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z"}}]})(props);
}
export default BiDotsVertical;
