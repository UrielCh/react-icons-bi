import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function BiCircleQuarter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2h-1v11h11v-1A10 10 0 0 0 12 2zm1 9V4.06A8 8 0 0 1 19.94 11z"}}]})(props);
}
export default BiCircleQuarter;
