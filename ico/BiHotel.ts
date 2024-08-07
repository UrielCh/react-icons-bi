import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hotel icon from BoxIcons
 * @module
 */
export function BiHotel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{"cx":"7.5","cy":"11.5","r":"2.5"}},{tag:"path",attr:{d:"M17.205 7H12a1 1 0 0 0-1 1v7H4V6H2v14h2v-3h16v3h2v-8.205A4.8 4.8 0 0 0 17.205 7zM13 15V9h4.205A2.798 2.798 0 0 1 20 11.795V15h-7z"},child:[]}]})(props);
}
export default BiHotel;
