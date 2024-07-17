import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function BiLogoUnsplash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.625 8.063V3h6.75v5.063h-6.75zm6.75 2.812H21V21H3V10.875h5.625v5.063h6.75v-5.063z"}}]})(props);
}
export default BiLogoUnsplash;
