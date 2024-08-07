import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidChevronLeftCircle icon from BoxIcons
 * @module
 */
export function BiSolidChevronLeftCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm2.707 14.293-1.414 1.414L7.586 12l5.707-5.707 1.414 1.414L10.414 12l4.293 4.293z"}}]})(props);
}
export default BiSolidChevronLeftCircle;
