import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HeartCircle icon from BoxIcons
 * @module
 */
export function BiHeartCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.279 8.833 12 9.112l-.279-.279a2.745 2.745 0 0 0-3.906 0 2.745 2.745 0 0 0 0 3.907L12 16.926l4.186-4.186a2.745 2.745 0 0 0 0-3.907 2.746 2.746 0 0 0-3.907 0z"}},{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"},child:[]}]})(props);
}
export default BiHeartCircle;
