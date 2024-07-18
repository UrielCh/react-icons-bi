import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Plus icon from BoxIcons
 * @module
 */
export function BiPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}}]})(props);
}
export default BiPlus;
