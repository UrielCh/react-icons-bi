import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleThreeQuarter icon from BoxIcons
 * @module
 */
export function BiCircleThreeQuarter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2h-1v9H2v1a10 10 0 0 0 17.07 7.07A10 10 0 0 0 12 2zm5.66 15.66A8 8 0 0 1 4.06 13H13V4.06a8 8 0 0 1 4.66 13.6z"}}]})(props);
}
export default BiCircleThreeQuarter;
