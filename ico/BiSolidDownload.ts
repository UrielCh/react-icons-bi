import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidDownload icon from BoxIcons
 * @module
 */
export function BiSolidDownload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"}}]})(props);
}
export default BiSolidDownload;
