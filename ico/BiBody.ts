import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function BiBody(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{"cx":"12","cy":"4","r":"2"}},{tag:"path",attr:{d:"M15 22V9h5V7H4v2h5v13h2v-7h2v7z"},child:[]}]})(props);
}
export default BiBody;
