import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BookmarkAlt icon from BoxIcons
 * @module
 */
export function BiBookmarkAlt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.5 2h-12C4.57 2 3 3.57 3 5.5V22l7-3.5 7 3.5v-9h5V5.5C22 3.57 20.43 2 18.5 2zM15 18.764l-5-2.5-5 2.5V5.5C5 4.673 5.673 4 6.5 4h8.852A3.451 3.451 0 0 0 15 5.5v13.264zM20 11h-3V5.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V11z"}}]})(props);
}
export default BiBookmarkAlt;
