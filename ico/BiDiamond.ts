import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Diamond icon from BoxIcons
 * @module
 */
export function BiDiamond(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.813 3.838A2 2 0 0 0 16.187 3H7.813c-.644 0-1.252.313-1.667.899l-4 6.581a.999.999 0 0 0 .111 1.188l9 10a.995.995 0 0 0 1.486.001l9-10a.997.997 0 0 0 .111-1.188l-4.041-6.643zM12 19.505 5.245 12h13.509L12 19.505zM4.777 10l3.036-5 8.332-.062L19.222 10H4.777z"}}]})(props);
}
export default BiDiamond;
