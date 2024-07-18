import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidCircleHalf from BoxIcons
 */
export function BiSolidCircleHalf(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2h-1v20h1a10 10 0 0 0 0-20z"}}]})(props);
}
export default BiSolidCircleHalf;
