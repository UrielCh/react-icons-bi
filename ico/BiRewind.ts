import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Rewind icon from BoxIcons
 * @module
 */
export function BiRewind(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 12V7l-7 5 7 5zm7-5-7 5 7 5z"}}]})(props);
}
export default BiRewind;
