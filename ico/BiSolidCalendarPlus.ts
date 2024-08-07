import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidCalendarPlus icon from BoxIcons
 * @module
 */
export function BiSolidCalendarPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm11-6h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zM5 7h14v2H5V7z"}}]})(props);
}
export default BiSolidCalendarPlus;
