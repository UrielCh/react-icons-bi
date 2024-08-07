import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidArch icon from BoxIcons
 * @module
 */
export function BiSolidArch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 8V6H3v14H2v2h6v-7c0-.163.046-4 4-4 3.821 0 3.993 3.602 4 4v7h6v-2h-1V8zM2 2h20v2H2z"}}]})(props);
}
export default BiSolidArch;
