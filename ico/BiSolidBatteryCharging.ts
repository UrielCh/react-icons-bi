import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidBatteryCharging icon from BoxIcons
 * @module
 */
export function BiSolidBatteryCharging(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 10V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2h2v-4h-2zM9 17l2-3.89L7 12l6-5-1 3.89L16 12l-7 5z"}}]})(props);
}
export default BiSolidBatteryCharging;
