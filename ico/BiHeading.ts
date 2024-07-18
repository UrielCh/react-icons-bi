import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Heading icon from BoxIcons
 * @module
 */
export function BiHeading(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 20V4h-3v6H9V4H6v16h3v-7h6v7z"}}]})(props);
}
export default BiHeading;
