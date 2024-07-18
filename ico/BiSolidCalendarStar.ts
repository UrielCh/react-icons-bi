import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidCalendarStar icon from BoxIcons
 * @module
 */
export function BiSolidCalendarStar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-4.588 15-2.449-1.288L9.514 19l.468-2.728L8 14.342l2.738-.398 1.225-2.48 1.225 2.48 2.738.398-1.981 1.931.467 2.727zM19 9H5V7h14v2z"}}]})(props);
}
export default BiSolidCalendarStar;
