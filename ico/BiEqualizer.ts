import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Equalizer icon from BoxIcons
 * @module
 */
export function BiEqualizer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11 9h2v6h-2zm4-3h2v12h-2zM7 4h2v16H7zm12 7h2v2h-2zM3 10h2v4H3z"}}]})(props);
}
export default BiEqualizer;
