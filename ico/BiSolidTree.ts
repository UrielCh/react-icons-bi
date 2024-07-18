import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidTree icon from BoxIcons
 * @module
 */
export function BiSolidTree(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m20 18-4-5h3l-4-5h2l-5-6-5 6h2l-4 5h3l-4 5h7v4h2v-4z"}}]})(props);
}
export default BiSolidTree;
