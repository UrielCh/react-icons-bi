import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FirstAid icon from BoxIcons
 * @module
 */
export function BiFirstAid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zM4 18V8h16l.001 10H4z"}},{tag:"path",attr:{d:"M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z"},child:[]}]})(props);
}
export default BiFirstAid;
