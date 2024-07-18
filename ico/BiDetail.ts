import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Detail icon from BoxIcons
 * @module
 */
export function BiDetail(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"}},{tag:"path",attr:{d:"M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"},child:[]}]})(props);
}
export default BiDetail;
