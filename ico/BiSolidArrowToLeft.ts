import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidArrowToLeft from BoxIcons
 */
export function BiSolidArrowToLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h2v12H4zm10 7h6v-2h-6V6l-6 6 6 6z"}}]})(props);
}
export default BiSolidArrowToLeft;
