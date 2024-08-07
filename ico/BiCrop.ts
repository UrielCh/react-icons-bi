import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Crop icon from BoxIcons
 * @module
 */
export function BiCrop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 7c0-1.103-.897-2-2-2H7V2H5v3H2v2h15v15h2v-3h3v-2h-3V7z"}},{tag:"path",attr:{d:"M5 9v8c0 1.103.897 2 2 2h8v-2H7V9H5z"},child:[]}]})(props);
}
export default BiCrop;
