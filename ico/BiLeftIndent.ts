import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LeftIndent icon from BoxIcons
 * @module
 */
export function BiLeftIndent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 7h10v2H4zm0-4h16v2H4zm0 8h10v2H4zm0 4h10v2H4zm0 4h16v2H4zm16-3V8l-4 4z"}}]})(props);
}
export default BiLeftIndent;
