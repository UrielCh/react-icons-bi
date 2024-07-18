import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidDownArrowAlt icon from BoxIcons
 * @module
 */
export function BiSolidDownArrowAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 12h-5V6h-2v6H6l6 7z"}}]})(props);
}
export default BiSolidDownArrowAlt;
