import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidArrowFromBottom from BoxIcons
 */
export function BiSolidArrowFromBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 18h12v2H6zm6-14-6 6h5v6h2v-6h5z"}}]})(props);
}
export default BiSolidArrowFromBottom;
