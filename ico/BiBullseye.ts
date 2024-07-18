import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bullseye icon from BoxIcons
 * @module
 */
export function BiBullseye(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"}},{tag:"path",attr:{d:"M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 18c-4.337 0-8-3.663-8-8s3.663-8 8-8 8 3.663 8 8-3.663 8-8 8z"},child:[]},{tag:"path",attr:{d:"M12 10c-1.081 0-2 .919-2 2s.919 2 2 2 2-.919 2-2-.919-2-2-2z"},child:[]}]})(props);
}
export default BiBullseye;
