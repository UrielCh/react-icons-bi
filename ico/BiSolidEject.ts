import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidEject icon from BoxIcons
 * @module
 */
export function BiSolidEject(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m12 6-6 8h12zM6 16h12v2H6z"}}]})(props);
}
export default BiSolidEject;
