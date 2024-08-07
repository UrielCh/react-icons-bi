import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidCrop icon from BoxIcons
 * @module
 */
export function BiSolidCrop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 7.5C19 6.121 17.879 5 16.5 5H8V2H5v3H2v3h14v14h3v-3h3v-3h-3V7.5z"}},{tag:"path",attr:{d:"M8 10H5v6.5C5 17.879 6.121 19 7.5 19H14v-3H8v-6z"},child:[]}]})(props);
}
export default BiSolidCrop;
