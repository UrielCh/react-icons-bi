import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidAlarm icon from BoxIcons
 * @module
 */
export function BiSolidAlarm(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4c-4.878 0-9 4.122-9 9s4.122 9 9 9c4.879 0 9-4.122 9-9s-4.121-9-9-9zm5 10h-6V8h2v4h4v2zm3.292-7.292-3.01-3 1.412-1.417 3.01 3zM5.282 2.294 6.7 3.706l-2.99 3-1.417-1.413z"}}]})(props);
}
export default BiSolidAlarm;
