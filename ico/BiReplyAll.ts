import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ReplyAll from BoxIcons
 */
export function BiReplyAll(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 18v-8a1 1 0 0 0-1-1h-6V6l-5 4 5 4v-3h5v7h2z"}},{tag:"path",attr:{d:"M9 12.4 6 10l3-2.4V6l-5 4 5 4z"},child:[]}]})(props);
}
export default BiReplyAll;
