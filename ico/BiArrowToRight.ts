import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowToRight icon from BoxIcons
 * @module
 */
export function BiArrowToRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 6h2v12h-2zM4 13h8.586l-4.293 4.293 1.414 1.414L16.414 12 9.707 5.293 8.293 6.707 12.586 11H4z"}}]})(props);
}
export default BiArrowToRight;
