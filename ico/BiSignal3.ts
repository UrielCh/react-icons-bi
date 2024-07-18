import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Signal3 icon from BoxIcons
 * @module
 */
export function BiSignal3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 16h2v5H3zm4-3h2v8H7zm4-3h2v11h-2z"}}]})(props);
}
export default BiSignal3;
