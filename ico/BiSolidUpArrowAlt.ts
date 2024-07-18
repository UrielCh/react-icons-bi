import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidUpArrowAlt from BoxIcons
 */
export function BiSolidUpArrowAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13 18v-6h5l-6-7-6 7h5v6z"}}]})(props);
}
export default BiSolidUpArrowAlt;
