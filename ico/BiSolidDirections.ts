import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidDirections icon from BoxIcons
 * @module
 */
export function BiSolidDirections(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 11h-6V8h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5L2 5l3 3h6v3H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v5h2v-5h6l3-3-3-3z"}}]})(props);
}
export default BiSolidDirections;
