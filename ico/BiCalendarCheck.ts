import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CalendarCheck icon from BoxIcons
 * @module
 */
export function BiCalendarCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z"}},{tag:"path",attr:{d:"m11 17.414 5.707-5.707-1.414-1.414L11 14.586l-2.293-2.293-1.414 1.414z"},child:[]}]})(props);
}
export default BiCalendarCheck;
