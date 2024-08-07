import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Album icon from BoxIcons
 * @module
 */
export function BiAlbum(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{"cx":"11.99","cy":"11.99","r":"2.01"}},{tag:"path",attr:{d:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"},child:[]},{tag:"path",attr:{d:"M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4z"},child:[]}]})(props);
}
export default BiAlbum;
