import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cross icon from BoxIcons
 * @module
 */
export function BiCross(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11 2h2v7h-2zm0 13h2v7h-2zm4-4h7v2h-7zM2 11h7v2H2z"}}]})(props);
}
export default BiCross;
