import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bracket icon from BoxIcons
 * @module
 */
export function BiBracket(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 4V2H4v20h6v-2H6V4zm4 16v2h6V2h-6v2h4v16z"}}]})(props);
}
export default BiBracket;
