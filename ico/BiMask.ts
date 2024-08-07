import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Mask icon from BoxIcons
 * @module
 */
export function BiMask(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 6H5C3.346 6 2 7.346 2 9v5c0 2.206 1.794 4 4 4h1.637c1.166 0 2.28-.557 2.981-1.491.66-.879 2.104-.88 2.764.001A3.744 3.744 0 0 0 16.363 18H18c2.206 0 4-1.794 4-4V9c0-1.654-1.346-3-3-3zm1 8c0 1.103-.897 2-2 2h-1.637c-.54 0-1.057-.259-1.382-.69-.71-.948-1.797-1.492-2.981-1.492s-2.271.544-2.981 1.491A1.741 1.741 0 0 1 7.637 16H6c-1.103 0-2-.897-2-2V9c0-.551.448-1 1-1h14c.552 0 1 .449 1 1v5z"}},{tag:"ellipse",attr:{"cx":"7.5","cy":"11.5","rx":"2.5","ry":"1.5"},child:[]},{tag:"ellipse",attr:{"cx":"16.5","cy":"11.5","rx":"2.5","ry":"1.5"},child:[]}]})(props);
}
export default BiMask;
