import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * VerticalTop icon from BoxIcons
 * @module
 */
export function BiVerticalTop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m12 7-4 4h3v8h2v-8h3l-4-4zM3 3h3v2H3zM8 3h3v2H8zM13 3h3v2h-3zM18 3h3v2h-3z"}}]})(props);
}
export default BiVerticalTop;
