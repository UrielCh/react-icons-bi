import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CollapseAlt icon from BoxIcons
 * @module
 */
export function BiCollapseAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M2 15h7v7h2v-9H2v2zM15 2h-2v9h9V9h-7V2z"}}]})(props);
}
export default BiCollapseAlt;
