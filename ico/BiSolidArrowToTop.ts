import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function BiSolidArrowToTop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"}}]})(props);
}
export default BiSolidArrowToTop;
