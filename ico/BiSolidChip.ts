import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidChip icon from BoxIcons
 * @module
 */
export function BiSolidChip(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 7a2 2 0 0 0-2-2h-1V2h-2v3h-4V2H8v3H7a2 2 0 0 0-2 2v1H2v2h3v4H2v2h3v1a2 2 0 0 0 2 2h1v3h2v-3h4v3h2v-3h1a2 2 0 0 0 2-2v-1h3v-2h-3v-4h3V8h-3V7zm-4 8H9V9h6v6z"}}]})(props);
}
export default BiSolidChip;
