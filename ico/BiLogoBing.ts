import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LogoBing icon from BoxIcons
 * @module
 */
export function BiLogoBing(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m5.71 3 3.593 1.264v12.645l5.061-2.919-2.48-1.165-1.566-3.897 7.974 2.802v4.073l-8.984 5.183-3.595-2L5.71 3z"}}]})(props);
}
export default BiLogoBing;
