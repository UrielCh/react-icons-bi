import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidRewindCircle icon from BoxIcons
 * @module
 */
export function BiSolidRewindCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.485 2 12s4.486 10 10 10c5.515 0 10-4.485 10-10S17.515 2 12 2zm5 14-6-4v4l-6-4 6-4v4l6-4v8z"}}]})(props);
}
export default BiSolidRewindCircle;
