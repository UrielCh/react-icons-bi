import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CalendarX icon from BoxIcons
 * @module
 */
export function BiCalendarX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m8.293 16.293 1.414 1.414L12 15.414l2.293 2.293 1.414-1.414L13.414 14l2.293-2.293-1.414-1.414L12 12.586l-2.293-2.293-1.414 1.414L10.586 14z"}},{tag:"path",attr:{d:"M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z"},child:[]}]})(props);
}
export default BiCalendarX;
