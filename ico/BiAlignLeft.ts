import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignLeft from BoxIcons
 */
export function BiAlignLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 19h16v2H4zm0-4h11v2H4zm0-4h16v2H4zm0-8h16v2H4zm0 4h11v2H4z"}}]})(props);
}
export default BiAlignLeft;
