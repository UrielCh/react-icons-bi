import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LinkExternal icon from BoxIcons
 * @module
 */
export function BiLinkExternal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"}},{tag:"path",attr:{d:"M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"},child:[]}]})(props);
}
export default BiLinkExternal;
