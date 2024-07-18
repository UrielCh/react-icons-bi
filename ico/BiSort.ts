import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sort icon from BoxIcons
 * @module
 */
export function BiSort(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z"}}]})(props);
}
export default BiSort;
