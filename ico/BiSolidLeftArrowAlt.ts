import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidLeftArrowAlt icon from BoxIcons
 * @module
 */
export function BiSolidLeftArrowAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m5 12 7 6v-5h6v-2h-6V6z"}}]})(props);
}
export default BiSolidLeftArrowAlt;
