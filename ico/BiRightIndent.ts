import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function BiRightIndent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 15h10v2H10zm-6 4h16v2H4zm6-8h10v2H10zm0-4h10v2H10zM4 3h16v2H4zm0 5v8l4-4z"}}]})(props);
}
export default BiRightIndent;
