import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidChevronRightCircle icon from BoxIcons
 * @module
 */
export function BiSolidChevronRightCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.293 15.707-1.414-1.414L13.586 12 9.293 7.707l1.414-1.414L16.414 12l-5.707 5.707z"}}]})(props);
}
export default BiSolidChevronRightCircle;
