import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Candles icon from BoxIcons
 * @module
 */
export function BiCandles(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 19h1v3h2v-3h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H9V2H7v3H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1zM7 7h2v10H7zm7 10h1v3h2v-3h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V4h-2v3h-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm1-8h2v6h-2z"}}]})(props);
}
export default BiCandles;
