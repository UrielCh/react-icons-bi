import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidTreeAlt icon from BoxIcons
 * @module
 */
export function BiSolidTreeAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m18 10-6-8-6 8h3l-5 8h7v4h2v-4h7l-5-8h3z"}}]})(props);
}
export default BiSolidTreeAlt;
