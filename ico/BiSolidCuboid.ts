import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function BiSolidCuboid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.707 2.293A.996.996 0 0 0 16 2H8c-.414 0-.785.255-.934.641l-5 13a.999.999 0 0 0 .227 1.066l5 5A.996.996 0 0 0 8 22h8c.414 0 .785-.255.934-.641l5-13a.999.999 0 0 0-.227-1.066l-5-5zM18.585 7h-5.171l-3-3h5.172l2.999 3zm-3.272 13h-6.23l4.583-11h5.878l-4.231 11z"}}]})(props);
}
export default BiSolidCuboid;
