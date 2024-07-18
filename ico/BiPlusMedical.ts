import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlusMedical icon from BoxIcons
 * @module
 */
export function BiPlusMedical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z"}}]})(props);
}
export default BiPlusMedical;
