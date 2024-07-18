import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidCylinder from BoxIcons
 */
export function BiSolidCylinder(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22c5.131 0 9-1.935 9-4.5V7c0-.051-.024-.097-.033-.146.016-.117.033-.234.033-.354C21 3.935 17.131 2 12 2S3 3.935 3 6.5v11c0 2.565 3.869 4.5 9 4.5zm0-18c4.273 0 7 1.48 7 2.5a.683.683 0 0 1-.025.158c-.004.01-.012.018-.015.027-.274.848-2.29 1.98-5.496 2.253l-.05.003C12.965 8.979 12.494 9 12 9 7.727 9 5 7.52 5 6.5S7.727 4 12 4z"}}]})(props);
}
export default BiSolidCylinder;
