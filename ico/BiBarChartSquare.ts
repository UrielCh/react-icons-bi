import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BarChartSquare icon from BoxIcons
 * @module
 */
export function BiBarChartSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm16.001 14H5V5h14l.001 14z"}},{tag:"path",attr:{d:"M11 7h2v10h-2zm4 3h2v7h-2zm-8 2h2v5H7z"},child:[]}]})(props);
}
export default BiBarChartSquare;
