import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Notepad icon from BoxIcons
 * @module
 */
export function BiNotepad(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"}},{tag:"path",attr:{d:"M7 9h10v2H7zm0 4h5v2H7z"},child:[]}]})(props);
}
export default BiNotepad;
