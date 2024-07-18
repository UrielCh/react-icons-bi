import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowFromTop from BoxIcons
 */
export function BiArrowFromTop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 4h12v2H6zm6 16.414 6.707-6.707-1.414-1.414L13 16.586V8h-2v8.586l-4.293-4.293-1.414 1.414z"}}]})(props);
}
export default BiArrowFromTop;
