import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BorderAll from BoxIcons
 */
export function BiBorderAll(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9 21h12V3H3v18h6zm10-4v2h-6v-6h6v4zM15 5h4v6h-6V5h2zM5 7V5h6v6H5V7zm0 12v-6h6v6H5z"}}]})(props);
}
export default BiBorderAll;
