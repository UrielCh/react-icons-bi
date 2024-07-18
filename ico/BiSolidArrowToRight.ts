import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidArrowToRight from BoxIcons
 */
export function BiSolidArrowToRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 6h2v12h-2zm-8 5H4v2h6v5l6-6-6-6z"}}]})(props);
}
export default BiSolidArrowToRight;
