import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidToTop from BoxIcons
 */
export function BiSolidToTop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 15h4v6h6v-6h4l-7-8zM4 3h16v2H4z"}}]})(props);
}
export default BiSolidToTop;
