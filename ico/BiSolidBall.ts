import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SolidBall from BoxIcons
 */
export function BiSolidBall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.247 3.034c-.069-.018-1.742-.433-4.052-.433-2.842 0-6.868.64-9.91 3.687-5.34 5.349-3.34 13.61-3.252 13.96a1 1 0 0 0 .728.726c.069.018 1.726.426 4.018.426 2.849 0 6.884-.641 9.932-3.688 5.335-5.335 3.351-13.6 3.264-13.949a1.005 1.005 0 0 0-.728-.729zm-3.537 9.262-1.414 1.414-1.793-1.792-1.586 1.586 1.792 1.793-1.414 1.414-1.792-1.793-1.793 1.793-1.414-1.414 1.793-1.793-1.793-1.794 1.414-1.414 1.793 1.794 1.586-1.586-1.794-1.793 1.414-1.414 1.794 1.793 1.793-1.793 1.414 1.414-1.793 1.793 1.793 1.792z"}}]})(props);
}
export default BiSolidBall;
