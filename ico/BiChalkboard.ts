import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Chalkboard icon from BoxIcons
 * @module
 */
export function BiChalkboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h4l-1.8 2.4 1.6 1.2 2.7-3.6h3l2.7 3.6 1.6-1.2L16 18h4c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 16V5h16l.001 11H4z"}},{tag:"path",attr:{d:"M6 12h4v2H6z"},child:[]}]})(props);
}
export default BiChalkboard;
