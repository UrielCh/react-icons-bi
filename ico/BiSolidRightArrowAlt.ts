import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidRightArrowAlt icon from BoxIcons
 * @module
 */
export function BiSolidRightArrowAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m19 12-7-6v5H6v2h6v5z"}}]})(props);
}
export default BiSolidRightArrowAlt;
