import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidArrowFromLeft icon from BoxIcons
 * @module
 */
export function BiSolidArrowFromLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h2v12H4zm10 5H8v2h6v5l6-6-6-6z"}}]})(props);
}
export default BiSolidArrowFromLeft;
