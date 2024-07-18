import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidFlagAlt icon from BoxIcons
 * @module
 */
export function BiSolidFlagAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m14.303 6-3-2H6V2H4v20h2v-8h4.697l3 2H20V6z"}}]})(props);
}
export default BiSolidFlagAlt;
