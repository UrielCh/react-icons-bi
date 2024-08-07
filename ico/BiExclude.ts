import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Exclude icon from BoxIcons
 * @module
 */
export function BiExclude(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 8h-3V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h3v3c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-4 7H9V9h6v6z"}}]})(props);
}
export default BiExclude;
