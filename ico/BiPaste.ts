import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Paste icon from BoxIcons
 * @module
 */
export function BiPaste(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 11V5c0-1.103-.897-2-2-2h-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H4c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2zm-9 2v5H4V5h3v2h8V5h3v6h-5c-1.103 0-2 .897-2 2zm2 7v-7h7l.001 7H13z"}}]})(props);
}
export default BiPaste;
