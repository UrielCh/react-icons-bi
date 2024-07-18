import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidCastle icon from BoxIcons
 * @module
 */
export function BiSolidCastle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 11h-2V6h1V2h-2v2h-1V2h-2v2h-1V2h-2v2h-1V2H8v2H7V2H5v4h1v5H4V9H2v12h7v-5a3 3 0 0 1 6 0v5h7V9h-2zm-10-1H8V7h2zm6 0h-2V7h2z"}}]})(props);
}
export default BiSolidCastle;
