import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidAdjust icon from BoxIcons
 * @module
 */
export function BiSolidAdjust(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.579 2 2 6.58 2 12s4.579 10 10 10 10-4.58 10-10S17.421 2 12 2zm0 17V5c3.829 0 7 3.169 7 7 0 3.828-3.171 7-7 7z"}}]})(props);
}
export default BiSolidAdjust;
