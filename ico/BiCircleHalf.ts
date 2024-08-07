import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleHalf icon from BoxIcons
 * @module
 */
export function BiCircleHalf(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2h-1v20h1a10 10 0 0 0 0-20zm1 17.94V4.06a8 8 0 0 1 0 15.88z"}}]})(props);
}
export default BiCircleHalf;
