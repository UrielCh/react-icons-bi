import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Film icon from BoxIcons
 * @module
 */
export function BiFilm(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM9 11V5h6v6H9zm6 2v6H9v-6h6zM5 5h2v2H5V5zm0 4h2v2H5V9zm0 4h2v2H5v-2zm0 4h2v2H5v-2zm14.002 2H17v-2h2.002v2zm-.001-4H17v-2h2.001v2zm0-4H17V9h2.001v2zM17 7V5h2v2h-2z"}}]})(props);
}
export default BiFilm;
