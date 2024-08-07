import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidTorch icon from BoxIcons
 * @module
 */
export function BiSolidTorch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8 11.648V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8.352c1.067-.552 3-1.928 3-4.648V5H5v2c0 2.72 1.933 4.096 3 4.648zM11 11h2v3h-2v-3zM5 2h14v2H5z"}}]})(props);
}
export default BiSolidTorch;
