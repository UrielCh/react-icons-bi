import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ScatterChart icon from BoxIcons
 * @module
 */
export function BiScatterChart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 21h17v-2H5V3H3v17a1 1 0 0 0 1 1z"}},{tag:"circle",attr:{"cx":"10","cy":"8","r":"2"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"12","r":"2"},child:[]},{tag:"circle",attr:{"cx":"11.5","cy":"13.5","r":"1.5"},child:[]},{tag:"circle",attr:{"cx":"16.5","cy":"6.5","r":"1.5"},child:[]}]})(props);
}
export default BiScatterChart;
