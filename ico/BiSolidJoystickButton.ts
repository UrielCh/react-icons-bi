import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidJoystickButton icon from BoxIcons
 * @module
 */
export function BiSolidJoystickButton(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 8h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM7 14l-3-2 3-2v4zm5 6-2-3h4l-2 3zm0-6a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 14zm-2-7 2-3 2 3h-4zm7 7v-4l3 2-3 2z"}}]})(props);
}
export default BiSolidJoystickButton;
