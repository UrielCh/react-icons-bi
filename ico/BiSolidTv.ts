import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidTv icon from BoxIcons
 * @module
 */
export function BiSolidTv(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 6h-5.586l2.293-2.293-1.414-1.414L12 5.586 8.707 2.293 7.293 3.707 9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2z"}}]})(props);
}
export default BiSolidTv;
