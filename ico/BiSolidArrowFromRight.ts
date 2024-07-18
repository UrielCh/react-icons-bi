import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidArrowFromRight icon from BoxIcons
 * @module
 */
export function BiSolidArrowFromRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 6h2v12h-2zm-8 12v-5h6v-2h-6V6l-6 6z"}}]})(props);
}
export default BiSolidArrowFromRight;
