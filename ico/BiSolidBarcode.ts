import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidBarcode icon from BoxIcons
 * @module
 */
export function BiSolidBarcode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM8 17H5V7h3zm2 0H9V7h1zm2 0h-1V7h1zm4 0h-3V7h3zm3 0h-2V7h2z"}}]})(props);
}
export default BiSolidBarcode;
