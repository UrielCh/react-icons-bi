import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidDiamond icon from BoxIcons
 * @module
 */
export function BiSolidDiamond(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.445 3h-8.89c-.345 0-.666.178-.849.47L3.25 9h17.5l-3.456-5.53a1.003 1.003 0 0 0-.849-.47zM11.26 21.186a1 1 0 0 0 1.48 0L22 11H2l9.26 10.186z"}}]})(props);
}
export default BiSolidDiamond;
