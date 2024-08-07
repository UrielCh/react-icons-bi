import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowToLeft icon from BoxIcons
 * @module
 */
export function BiArrowToLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h2v12H4zm10.293-.707L7.586 12l6.707 6.707 1.414-1.414L11.414 13H20v-2h-8.586l4.293-4.293z"}}]})(props);
}
export default BiArrowToLeft;
