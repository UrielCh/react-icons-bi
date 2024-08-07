import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidComment icon from BoxIcons
 * @module
 */
export function BiSolidComment(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"}}]})(props);
}
export default BiSolidComment;
