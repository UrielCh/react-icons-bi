import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignMiddle from BoxIcons
 */
export function BiAlignMiddle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 19h16v2H4zm3-4h10v2H7zm-3-4h16v2H4zm0-8h16v2H4zm3 4h10v2H7z"}}]})(props);
}
export default BiAlignMiddle;
