import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidEnvelope icon from BoxIcons
 * @module
 */
export function BiSolidEnvelope(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"}}]})(props);
}
export default BiSolidEnvelope;
